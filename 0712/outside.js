
function bgChange(){
	const backChanger = document.querySelector("div");
	backChanger.addEventListener("click", function(e){
		e;
		if (backChanger.style.backgroundColor === "black"){
			backChanger.style.backgroundColor = "red"
		}
		else {
			backChanger.style.backgroundColor = "black"
		}
		// backChanger.style.backgroundColor = "red";
		// const backColor = backChanger.style.backgroundColor;
		// backColor = "red";
		// if (backColor === " blue"){
		// 	backColor = "red";
		// }
		// else {
		// 	backColor = "blue";
		// }

	}, false);
}
