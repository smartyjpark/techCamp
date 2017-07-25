

class Swipe {
	constructor(selector){
		this.index = 0;
		this.pointDistance;
		this.moveDistance = 0;
		this.totalDistance = 0;
		this.startPoint;
		this.currentPoint;
		this.selector = document.querySelector(selector);
		this.pageWidth = window.innerWidth;
		this.dir = -1;

	}

	eventOn(){

		this.selector.addEventListener('touchstart', (e) => this.setStartPoint(e))
		this.selector.addEventListener('touchmove', (e) => {	
			this.setCurrentPoint(e);	
			this.setDistance()
			this.setDir()
			this.wrapperTranslate(this.moveDistance)
		});

		this.selector.addEventListener('touchend', function(e){
			if (Math.abs(this.pointDistance) / window.innerWidth < 0.20){
				this.selector.style.transform = "translateX("+this.totalDistance+"px)";
			} else{
				this.selector.style.transition = "0.3s";
				this.totalDistance += window.innerWidth*this.dir;
				this.selector.style.transform = "translateX("+this.totalDistance+"px)";
				this.index -= this.dir;
				console.log(this.index)
			}
		}.bind(this));

	}

	setStartPoint(e){
		this.startPoint = e.changedTouches[0].pageX;
	}

	setCurrentPoint(e){
		this.currentPoint = e.changedTouches[0].pageX;
	}

	setDistance(){
		this.pointDistance = -(this.startPoint - this.currentPoint)*0.5;
		this.moveDistance = this.totalDistance + this.pointDistance;
	}

	setDir(){
		if (this.startPoint < this.currentPoint){
				this.dir = 1
				console.log(this.dir)
		} else if (this.startPoint > this.currentPoint){
			this.dir = -1
			console.log(this.dir)
		}
	}

	wrapperTranslate(distance){
		this.selector.style.transform = "translateX("+distance+"px)";
	}

}

document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swipe(".wrapper");
	swiper.eventOn()
});