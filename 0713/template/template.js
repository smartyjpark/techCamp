//document에 이벤트를 걸어줘야함
document.addEventListener('DOMContentLoaded', function(){
	//delegation을 통해 이벤트 호출
	
	const blogURL = "http://jsonplaceholder.typicode.com/posts/";
	const sectionClass = "eleDisplayShow";
	const templateID = "myTemplate";
	const templateBody = "<h1> <%=title%> </h1> <span> <%=body%> </span>";
	const tabClass = "selectedTab"

	const wrapper = new Event;
	const button = new Event;
	const myBlog = new Blog(blogURL, sectionClass, templateID, templateBody);
	const myTab = new Tab(tabClass);

	wrapper.wrapperEventOn(myTab, myBlog, "#tab-wrapper")
	button.buttonEventOn(myBlog, "#connect-json")
	//default 컨텐츠 변경을 위해 ajax() 를 한번 실행시킨다.

	myBlog.ajaxSection(1);
	o.a();

});


const ajaxCache = {};
const tabCache = {1:-1, 2:0, 3:0, 4:0, 5:0};

class Event {
	wrapperEventOn(tab, myBlog, wrapperClass) {
		// const thisWrapper = this;
		const wrapperHTML = document.querySelector(wrapperClass);
		wrapperHTML.addEventListener("click", function(e){
		//예외처리를 위해 let 형으로 target 변수를 설정한다
			let target = e.target;
			//Div 안에 있는 SPAN 태그 예외
			if (target.tagName === "SPAN") {
				target = target.parentElement;
			}
			tab.modifyTab(target)
			myBlog.ajaxSection(target.id, myBlog.url);
		});
	}

	buttonEventOn(blog, buttonClass){
		const buttonHTML = document.querySelector(buttonClass);
		buttonHTML.addEventListener("click", function(e){
			blog.ajaxComments()
			console.log("open comments")
		});
	}

}


class Tab {
	constructor(tabClass){
		this.tabClass = tabClass;
	}

	modifyTab(target){
		const selectedTab = document.querySelector("."+this.tabClass)
		selectedTab.classList.remove(this.tabClass)
		target.classList.add(this.tabClass);
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

	ajaxSection(index) {
			const openRequest = new XMLHttpRequest();
			const thisBlog = this;
			// const blog = this.blog;
			if (ajaxCache[index]){
				this.modifySection(ajaxCache[index], index)
				Tab.tabConunt(index);
			}
			else {
				openRequest.addEventListener("load", function(e) {
					const htData = JSON.parse(openRequest.responseText);
					this.saveCache(htData, index);
					Tab.tabConunt(index);
					this.modifySection(htData, index);
				}.bind(this));
			openRequest.open("GET", this.url+index);
			openRequest.send();
		} 
	}

	modifySection(data, index){
		const body = _.template(this.templateBody);
		const newSection = document.getElementById("section"+index);
		console.log(newSection);
		const selectedSection = document.querySelector("."+this.sectionClass);
		selectedSection.classList.remove(this.sectionClass);
		newSection.innerHTML = body(data);
		newSection.classList.add(this.sectionClass);
	}

	ajaxComments() {
		const openRequest = new XMLHttpRequest();
		openRequest.addEventListener("load", function(e) {
			const jsonData = JSON.parse(openRequest.responseText);
			const objJson = {"jsonContent": jsonData}
			console.log(this)
			this.insertComments(objJson);
			
		}.bind(this));
		openRequest.open("GET", "data.json");
		openRequest.send();
	
	}

	insertComments(data){
		console.log(this.templateID)
		const source = document.querySelector("#"+this.templateID).innerHTML;
		const template = Handlebars.compile(source);
		const html = template(data);
		document.querySelector("."+this.sectionClass).innerHTML += html;
	}

}


// 17일 실습
//arrow function 은 bind를 포함하고 있음 ;;;
//apply 나 call 으로 바인딩이 된 함수를 바로 실행할 수 있다.(context change)
var o = {
	a() {
		document.body.addEventListener("click", function(){
			this.b();
		}.bind(this));
	},
	b() {
		console.log("called b");
	}
}