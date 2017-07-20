class Slider{
	constructor(){
		this.index = 0;
		this.contentsEventSelector = document.querySelector('.list-view');
		this.contentsList = document.querySelectorAll('.list');	
		this.arrowEventSelector = document.querySelector('.slides_navi');
		this.slidePrev = document.querySelector('.slides_prev');
		this.slideNext = document.querySelector('.slides_next');
	}

}

const banchan = new Slider;
let viewIndex = -800;

function moveFirst(){
	document.querySelector('.list-view').style.transform = "translateX(-800px)";
}

function moveNext() {
	if (viewIndex === -1600){
		viewIndex = 0;
		console.log("move if " + viewIndex)
		document.querySelector('.list-view').style.transition = "";
		document.querySelector('.list-view').style.transform = "translateX(0px)";
		console.log(document.querySelector('.list-view').style.transform)

	}
	viewIndex -= 800;
	const index = viewIndex + "px";
	console.log("move " + viewIndex)
	const translateX = "translateX("+index+")";
	setTimeout(function(){
			document.querySelector('.list-view').style.transform = translateX;
			document.querySelector('.list-view').style.transition = "0.3s";
	}, 50)
	
}

function movePrev(){
	if (viewIndex === 0){
		viewIndex = -1600;
		document.querySelector('.list-view').style.transition = "";
		document.querySelector('.list-view').style.transform = "translateX(-1600px)";		
		console.log(document.querySelector('.list-view').style.transform)
	}
	viewIndex += 800
	console.log(viewIndex)
	const index = viewIndex+"px"
	const translateX = "translateX("+index+")"
	setTimeout(function(){
			document.querySelector('.list-view').style.transform = translateX;
			document.querySelector('.list-view').style.transition = "0.3s";
	}, 50)

}

banchan.slideNext.addEventListener("click", function(e){
	moveNext()
});

banchan.slidePrev.addEventListener("click", function(e){
	movePrev()
});

moveFirst()