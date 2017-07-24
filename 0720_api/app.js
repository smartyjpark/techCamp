class Ajax{
	constructor(url){
		this.url = "http://52.78.212.27:8080/woowa/"+url
		this.jsonData
	}


	ajaxOn(type, idx){
		const requestAjax = new XMLHttpRequest();
		requestAjax.addEventListener("load", function(e){
			const data = JSON.parse(requestAjax.responseText);
			const index = idx;
			if (type === "get"){
				this.ajaxSave(data, idx)
			}
			else if (type === "return"){
				
			}

		}.bind(this))
		requestAjax.open("GET", this.url)
		requestAjax.send()
	}

	ajaxSave(data, idx){
		this.jsonData = data;
		const dataIndex = idx;
		return this.jsonData[idx]
	}


}

class Tab {
	constructor() {
		this.eventtarget = document.querySelector('#best-tabs');
		this.index = 0;
		this.html = document.querySelector('#best-tabs').innerHTML;

	}

	tabsEvent(){
		this.eventtarget.addEventListener("click", function(e){
			document.querySelector("#best-tabs a.now").classList.remove("now")
			const target = e.target
			target.classList.toggle("now")
			this.contentOn(target.id)

		}.bind(this));
	}

	contentOn(id){
		console.log(id)
		const tester = new Ajax("best/"+id)
		const bestData = tester.ajaxOn("get", 0)
		const source = document.querySelector("#tab-contents").innerHTML
		const insertTemplate = Handlebars.compile(source);
		const html = insertTemplate(bestData);
		document.querySelector("#best-container").innerHTML += html;


	}


	contentSet() {


	}



}




const ajaxTest = new Ajax('best')
const ajaxData = ajaxTest.ajaxOn("get", 0);

const tabs = new Tab;
tabs.tabsEvent();
// const target = document.querySelector("#best-tabs")
// ajaxTest.ajaxOn(function(e, data){
// 	data.forEach(function(){
// 		console.log(e.)
// 	});
// 	const target = document.querySelector("#best-tabs")

// })