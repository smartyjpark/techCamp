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

function overflowCheck(callback){
	if (viewIndex === -1600){
		// movePrevAnimation()
		document.querySelector('.list-view').style.transition = "";
		document.querySelector('.list-view').style.transform = "translateX(0px)";
		console.log(document.querySelector('.list-view').style.transform);
		viewIndex = 0;
		// movePrevAnimation()
	} 
	else if (viewIndex === 800){
		// movePrevAnimation()
		document.querySelector('.list-view').style.transform = "translateX(-1600px)";
		document.querySelector('.list-view').style.transition = "0s";;
		viewIndex = -1600;
		// movePrevAnimation()
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

function moveNextCheck(){
	if (viewIndex === -1600){
		// movePrevAnimation()
		console.log(document.querySelector('.list-view').style.transform);
		document.querySelector('.list-view').style.transform = "translateX(p0px)"
		console.log(document.querySelector('.list-view').style.transform);
		document.querySelector('.list-view').style.transition = "";
		viewIndex = 0
		moveNext()
	} 
	else {
		moveNext()
	}
}

function movePrevCheck(){
		if (viewIndex === 0){
			// movePrevAnimation()
			document.querySelector('.list-view').style.transform = "translateX(-1600px)"
			document.querySelector('.list-view').style.transition = "";
			viewIndex = -1600
		} 
		else {
			movePrev()
		}
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

}



banchan.slideNext.addEventListener("click", function(e){
	// moveNextCheck()
	overflowCheck()
	moveNext()

	if(viewIndex == -1600) {
		setTimeout(function() {
		document.querySelector('.list-view').style.transition = "";
		document.querySelector('.list-view').style.transform = "translateX(0px)";
		},500)
	}
	// moveNext()
	//setTimeout(moveNext(), 3000)
	// moveNext()
	

});

banchan.slidePrev.addEventListener("click", function(e){
	movePrevCheck()
	// movePrev()
	// 	overflowCheck()

});



moveFirst()
