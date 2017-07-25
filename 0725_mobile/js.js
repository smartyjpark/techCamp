

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
		this.pointDistance = -(this.startPoint - this.currentPoint)*0.5;
		this.moveDistance = this.totalDistance + this.pointDistance;
	}

	setTotalDistance(){
		this.totalDistance += window.innerWidth*this.dir;
	}

	setDir(){
		if (this.startPoint < this.currentPoint){
				this.dir = 1;
		} else if (this.startPoint > this.currentPoint){
			this.dir = -1;
		}
	}

	setIndex(){
		this.index -= this.dir;
	}

	translate(distance){
		this.selector.style.transform = "translateX("+distance+"px)";
	}

	dragMove(e){
		this.setCurrentPoint(e);	
		this.setMoveDistance()
		this.setDir()
		this.translate(this.moveDistance)
	}

	swipeCheck(){
		if (Math.abs(this.pointDistance) / window.innerWidth < 0.25 || this.index-this.dir < 0 || this.index-this.dir > this.numOfBox-1){
			this.swipeComeback();
		} else {
			this.swipeMove();
		}
	}

	swipeComeback(){
		this.selector.style.transition = "0.15s";
		this.translate(this.totalDistance);
	}

	swipeMove(){
		this.setTotalDistance()
		this.selector.style.transition = "0.3s";
		this.translate(this.totalDistance);
		this.setIndex()
	}

}

document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swipe(".wrapper", ".box");
	swiper.eventOn();
});