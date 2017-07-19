//document에 이벤트를 걸어줘야함
document.addEventListener('DOMContentLoaded', function(){
	//delegation을 통해 이벤트 호출
	const nav = new EventHandler("#tab-wrapper");
	const comments = new EventHandler("#connect-json");
	const myBlog = new Blog("http://jsonplaceholder.typicode.com/posts/", 
		"eleDisplayShow", "myTemplate", "<h1> <%=title%> </h1> <span> <%=body%> </span>");
	const myTab = new Tab("selectedTab");

	nav.on("click", [myTab, myBlog], function(e){
		let target = e.target;
		if (target.tagName === "SPAN") {
			target = target.parentElement;
		}
		myTab.modifyTab(target)
		myBlog.ajaxSection(target.id, myBlog.url);
	});

	comments.on("click", [myBlog], function(e){
		myBlog.ajaxComments();
		console.log("open comments");
	});

	myBlog.ajaxContents(1, myBlog.url, myBlog.cacheCheck(1));

});

const ajaxCache = {};
const tabCache = {1:-1, 2:0, 3:0, 4:0, 5:0};

class EventHandler {
	constructor (eventId){
		this.eventId = eventId;
	}

	on(event, [eventTarget1, eventTarget2], func) {
		const eventHTML = document.querySelector(this.eventId);
		eventHTML.addEventListener(event, func);
	}
}

class Tab {
	constructor(tabClass){
		this.tabClass = tabClass;
	}

	modifyTab(target){
		const selectedTab = document.querySelector("."+this.tabClass)
		selectedTab.classList.toggle(this.tabClass)
		// target.classList.add(this.tabClass);
	}

	static tabConunt(index) {
		tabCache[index] += 1;
		console.log(tabCache);
	}

}


class Blog {
	constructor (url, sectionClass, templateID, templateBody){
		this.url = url;
		this.sectionClass = sectionClass;
		this.templateID = templateID;
		this.templateBody = templateBody;
	}

	saveCache(data, index) {
		ajaxCache[index] = data;
		console.log("Data Caching completed!")
	}

	ajaxContents(index, target, func){
		const openRequest = new XMLHttpRequest();
		const funcVal = func;
		if (funcVal){
			funcVal
		}
		else {
			openRequest.addEventListener("load", function(e) {
				const data = JSON.parse(openRequest.responseText);
				this.insertContents(data, index, funcVal);
			}.bind(this));
			openRequest.open("GET", target);
			openRequest.send();
		}
	}

	cacheCheck(index) {
		if (ajaxCache[index]){
		this.modifySection(ajaxCache[index], index)
		Tab.tabConunt(index);
		}
	}

	insertContents(data, index, func) {
		if (func){
			this.insertSection(data, index)
		}
		else{
			this.insertComments(data)
		}
	}


	insertSection(data, index){
		const body = _.template(this.templateBody);
		this.saveCache(data, index);
		Tab.tabConunt(index);
		const newSection = document.getElementById("section"+index);
		const selectedSection = document.querySelector("."+this.sectionClass);
		selectedSection.classList.toggle(this.sectionClass);
		newSection.innerHTML = body(data);
		// newSection.classList.add(this.sectionClass);
	}

	ajaxComments() {
		const openRequest = new XMLHttpRequest();
		openRequest.addEventListener("load", function(e) {
			const jsonData = JSON.parse(openRequest.responseText);
			const objJson = {"jsonContent": jsonData}
			this.insertComments(objJson);
			
		}.bind(this));
		openRequest.open("GET", "data.json");
		openRequest.send();
	
	}

	insertComments(data){
		const jsonData = data;
		const jsonObj = {"jsonContent" : jsonData};
		const source = document.querySelector("#"+this.templateID).innerHTML;
		const template = Handlebars.compile(source);
		const html = template(jsonObj);
		document.querySelector("."+this.sectionClass).innerHTML += html;
	}

}