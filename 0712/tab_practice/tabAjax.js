//document에 이벤트를 걸어줘야함
document.addEventListener('DOMContentLoaded', function(){
	//delegation을 통해 이벤트 호출
	const wrapper = document.getElementById("tab-wrapper");
	wrapper.addEventListener("click", function(e){
		//예외처리를 위해 let 형으로 target 변수를 설정한다
		let target = e.target;
		//Div 안에 있는 SPAN 태그 예외
		if (target.tagName === "SPAN") {
			target = target.parentElement;
		}
		modTab(target)
		ajax(target.id);
	});
	//default 컨텐츠 변경을 위해 ajax() 를 한번 실행시킨다.
	ajax(1);

});


//data를 저장할 object 와 함수 선언
const ajaxCache = {};
function saveCache(data, index) {
    ajaxCache[index] = data;
    console.log("Data Caching completed!")
};


//ajax Part
function ajax(index) {
	const oReq = new XMLHttpRequest();
	if (ajaxCache[index]){
		modSection(ajaxCache[index], index)
	}
	else {
		oReq.addEventListener("load", function(e) {
			const htData = JSON.parse(oReq.responseText);
			saveCache(htData, index);
			modSection(htData, index);
		});
		//바보같이 open과 send를 else문 밖에 뒀다가 안돌아갔었음...
		oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/"+index);
		oReq.send();
	} 
}
//Section 수정 및 생성. Ajax => modSection
function modSection(data, idx){
	const body = _.template("<h1> <%=title%> </h1> <span> <%=body%> </span>");
	const newSection = document.getElementById("section"+idx);
	const selectedSection = document.querySelector(".eleDisplayShow");
	selectedSection.classList.remove("eleDisplayShow");
	newSection.innerHTML = body(data);
	newSection.classList.add("eleDisplayShow");
}
//Tab 수정 및 클래스 변경. EventListener => modTab
function modTab(target){
	const selectedTab = document.querySelector(".selectedTab")
	selectedTab.classList.remove("selectedTab")
	target.classList.add("selectedTab");
}