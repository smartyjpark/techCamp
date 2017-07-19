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

function overflowCheck(){
	if (viewIndex === -1600){
		viewIndex = 0;
	} 
	else if (viewIndex === 0){
		viewIndex = -1600;
	}
}

function moveNext() {
	viewIndex -= 800;
	const index = viewIndex + "px";
	const translateX = "translateX("+index+")";
	console.log(viewIndex);
	document.querySelector('.list-view').style.transform = translateX;
	document.querySelector('.list-view').style.transition = "0.3s";
}

function movePrev(){
		viewIndex += 800
		console.log(viewIndex)
		const index = viewIndex+"px"
		const translateX = "translateX("+index+")"
		document.querySelector('.list-view').style.transform = translateX;
		document.querySelector('.list-view').style.transition = "0.3s";
}

function fakeInfinite(){
	if(viewIndex == -1600) {
		setTimeout(function() {
		document.querySelector('.list-view').style.transition = "";
		document.querySelector('.list-view').style.transform = "translateX(0px)";
		},200)
	} else if(viewIndex == 0) {
		setTimeout(function() {
		document.querySelector('.list-view').style.transition = "";
		document.querySelector('.list-view').style.transform = "translateX(-1600px)";
		},200)
	}
}

banchan.slideNext.addEventListener("click", function(e){
	overflowCheck()
	moveNext()
	fakeInfinite()

	

});

banchan.slidePrev.addEventListener("click", function(e){
	overflowCheck()
	movePrev()
	fakeInfinite()
});

moveFirst()
