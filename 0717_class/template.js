document.addEventListener('DOMContentLoaded', function(){

	const myTab = new Tab("#tab-wrapper","selectedTab")
	const myBlog = new Content("#connect-json");
	myBlog.url = "http://jsonplaceholder.typicode.com/posts/";
	myBlog.sectionClass = "eleDisplayShow";
	myBlog.template = "#myTemplate";
	myBlog.templateBody = "#myTemplateBody";


	//이 부분은 나름 프라이빗한 부분이기 때문에 밖보다는 안에 넣는게 낳을 듯 하다
	myTab.on("click", function(e){
		const target = e.target;
		const index = target.id;
		if (target.tagName === "SPAN") {
			target = target.parentElement;
		}
		myTab.setTab(target, index);
		myBlog.cacheCheck(myBlog.url+index, index);
	});

	myBlog.on("click", function(e){
		myBlog.getData("data.json");
	});

	myBlog.getData(myBlog.url+1, 1);


});

class EventHandler {
	constructor (eventId){
		this.eventId = eventId;
	}

	on(event, func) {
		const eventHTML = document.querySelector(this.eventId);
		eventHTML.addEventListener(event, func);
	}
}

class Tab extends EventHandler{
	constructor(eventId, tabClass){
		super(eventId);
		this.tabClass = tabClass;
		this.tabCache = {1:0, 2:0, 3:0, 4:0, 5:0}
	}

	tabCount(index){
		this.tabCache[index] += 1;
		console.log(this.tabCache);
	}
	

	setTab(target, index){
		const selectedTab = document.querySelector("."+this.tabClass)
		selectedTab.classList.remove(this.tabClass);
		target.classList.add(this.tabClass);
		this.tabCount(index);
	}
}

class Content extends EventHandler{
	constructor (eventId, url, sectionClass, templateID, templateBody){
		super(eventId);
		this.url = url;
		this.sectionClass = sectionClass;
		this.templateID = templateID;
		this.templateBody = templateBody;
		this.conentCache = {};
	}

	cacheCheck(url, index) {
		if (this.conentCache[index]){
			this.setBlog(this.conentCache[index], index);
		}
		else {
			this.getData(url, index);
		}
	}

	getData(url, blogIndex) {
		const openRequest = new XMLHttpRequest();
		openRequest.addEventListener("load", function(e) {
			const data = JSON.parse(openRequest.responseText);
			if (blogIndex){
				this.setBlog(data, blogIndex)
				this.conentCache[blogIndex] = data;
				console.log("Data Caching completed!")
			}
			else {
				this.setComment(data);
			}
		}.bind(this));
		openRequest.open("GET", url);
		openRequest.send();

	}

	setComment(data) {
		const jsonObj = {"jsonContent" : data};
		const source = document.querySelector(this.template).innerHTML;
		const insertTemplate = Handlebars.compile(source);
		const html = insertTemplate(jsonObj);
		document.querySelector("."+this.sectionClass).innerHTML += html;
	}

	setBlog(data, index) {
		const source = document.querySelector(this.templateBody).innerHTML;
		const body = _.template(document.querySelector(this.templateBody).innerHTML);
		const newSection = document.getElementById("section"+index);
		const selectedSection = document.querySelector("."+this.sectionClass);
		selectedSection.classList.remove(this.sectionClass);
		newSection.innerHTML = body(data);
		newSection.classList.add(this.sectionClass);

	}

}