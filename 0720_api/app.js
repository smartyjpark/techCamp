class TestAjax{
	constructor(url){
		this.url = "http://52.78.212.27:8080/woowa/"+url
	}

	ajaxOn(type, idx, func){
		const requestAjax = new XMLHttpRequest();
		requestAjax.addEventListener("load", function(e){
			const data = JSON.parse(requestAjax.responseText);
			const index = idx;
			func
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
		const jsonData = data;
		const dataIndex = idx;
		return jsonData[dataIndex];
	}

}

const ajaxTest = new TestAjax('best')
const ajaxData = ajaxTest.ajaxOn("get", 0);
console.log(ajaxData)
// const target = document.querySelector("#best-tabs")
// ajaxTest.ajaxOn(function(e, data){
// 	data.forEach(function(){
// 		console.log(e.)
// 	});
// 	const target = document.querySelector("#best-tabs")

// })