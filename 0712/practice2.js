window.addEventListener('DOMContentLoaded', function(){

	const clickOn = false;
	function reverseBoolean(a){
		a = !a;
	}
	const btnDiv = document.querySelector("div.openclose");
	const toggleBox = document.querySelector("div.box")
	btnDiv.addEventListener("click", function(e){
		toggleBox.style.visibility = (toggleBox.style.visibility == "visible") ? "hidden" : "visible"
		btnDiv.innerHTML = (toggleBox.style.visibility == "visible") ? "close" : "open"


	}, false);



});