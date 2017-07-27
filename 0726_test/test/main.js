function checkType(value){
	let type = null;
	switch (typeof value){
		case 'string' :
			type = 'string';
			break;
		default:
			type = 'monster';
	}
	return type;
}


 function addClass(el, cssClass) {
 	el.classList.add(cssClass);
}

function clickClearClassHandler(evt) { 
	evt.preventDefault();
	evt.target.className = ""; 
}

document.querySelector("h3").addEventListener("click", clickClearClassHandler)

function xhr(url, cb) {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener('load', function() {
		cb(JSON.parse(this.responseText));
	});
	xhr.open('get', url);
	xhr.send()
}

class Swipe {
	constructor(selector, element){
		this.selector = document.querySelector(selector);
		this.numOfBox = document.querySelectorAll(element).length;
		this.pageWidth = window.innerWidth;
		this.index = 0;
		this.dir = -1;
		this.moveDistance = 0;
		this.totalDistance = 0;
		this.pointDistance;
		this.startPoint;
		this.currentPoint;

	}

	eventOn(){
		this.selector.addEventListener('touchstart', (e) => this.setStartPoint(e));
		this.selector.addEventListener('touchmove', (e) => this.dragMove(e));
		this.selector.addEventListener('touchend', (e) => this.swipeCheck(e));
	}

	setStartPoint(e){
		this.startPoint = e.changedTouches[0].pageX;
	}

	setCurrentPoint(e){
		this.currentPoint = e.changedTouches[0].pageX;
	}

	setMoveDistance(){
		this.pointDistance = (this.currentPoint - this.startPoint)*0.5;
		this.moveDistance = this.totalDistance + this.pointDistance;
	}

	setTotalDistance(){
		this.totalDistance += this.pageWidth*this.dir;
	}

	setIndex(){
		this.index -= this.dir;
	}

	setDir(){
		if (this.startPoint < this.currentPoint){
				this.dir = 1;
		} else if (this.startPoint > this.currentPoint){
			this.dir = -1;
		}
	}

	resetDir(){
		this.dir = 0;
	}

	translate(distance, transition){
		this.selector.style.transition = transition
		this.selector.style.transform = "translateX("+distance+"px)";
	}

	dragMove(e){
		this.setCurrentPoint(e);	
		this.setMoveDistance()
		this.setDir()
		this.translate(this.moveDistance)
	}

	swipeCheck(){
		const postIndex = this.index-this.dir
		if (Math.abs(this.pointDistance) / this.pageWidth < 0.25 || postIndex < 0 || postIndex > this.numOfBox-1){
			this.swipeComeback();
		} else {
			this.swipeMove();
		}
	}

	swipeComeback(){
		this.translate(this.totalDistance, "0.15s");
	}

	swipeMove(){
		this.setTotalDistance()
		this.translate(this.totalDistance, "0.3s");
		this.setIndex()
		this.resetDir()
	}

}




