class Slider{
	constructor(name){
		this.name = name;
		this.index = 10;
		this.dotEventSelector = document.querySelector('.slides_pagination');
		this.arrowEventSelector = document.querySelector('.slides_navi');
		this.dotsList = document.querySelectorAll('.main_slides_lst > li');
		this.slidePrev = document.querySelector('.slides_prev');
		this.slideNext = document.querySelector('.slides_next');
		this.autoCheck = 1;
	}

	dotsEventOn(eventSelector, animate){
		eventSelector.addEventListener("click", function(e){
			this.dotsInnerEvent(e, animate);
			this.autoCheck = 0;
		}.bind(this));
	}

	arrowEventOn(eventSelector, animate){
		eventSelector.addEventListener("click", function(e){
			this.arrowInnerEvent(e, animate);
			this.autoCheck = 0;
		}.bind(this));
	}

	dotsListControl(){
		this.dotsList.forEach(function(dots){
			dots.style.zindex = 0;
			dots.style.opacity = 0;
			dots.style.transition = "0.7s";

			// dots.style += {zindex: '0', opacity: '0', transition: '0.7s'};
		});
	}

	targetDotControl(){
		const targetDot = this.dotsList[this.index];
		console.log(this.index)
		targetDot.style.zindex = 50;
		targetDot.style.display="inline-block"
		targetDot.style.opacity = 1;
		targetDot.style.transition = "1.2s";	
		// targetDot.style += {zindex: '50', opacity: '1', display: 'none', transition: '1.2s'};
	}

	dotsInnerEvent(e, animate){
		this.index = e.target.innerHTML;
		requestAnimationFrame(animate)
	}

	setSlider(){
		this.dotsListControl();
		this.targetDotControl();
	}

	arrowIndex(e){
		if (e.target === this.slideNext){
			this.index ++;
			this.arrowOverFlow()
		}
		if (e.target === this.slidePrev){
			this.index --;
			this.arrowOverFlow()
		}

	}

	arrowOverFlow(){
		if (this.index === 12){
			this.index = 0;
		}
		if (this.index === -1){
			this.index = 11;
		}
	}

	arrowInnerEvent(e, animate){
		this.arrowIndex(e);
		console.log("animate")
		requestAnimationFrame(animate)
	}

}

document.addEventListener('DOMContentLoaded', function(){

	const freshSlider = new Slider("freshSlider");
	freshSlider.dotsEventOn(freshSlider.dotEventSelector, animateByDot);
	freshSlider.arrowEventOn(freshSlider.arrowEventSelector, animateByArrow);

	function animateByDot(){
		freshSlider.setSlider();
	}

	function animateByArrow(){
		freshSlider.setSlider();

	}

	function arrowNext(){
		freshSlider.index ++;
		freshSlider.arrowOverFlow()
		requestAnimationFrame(animateByArrow);
	}

	function autoPlay(){
		setInterval(function(){
			console.log("auto check")
			if(freshSlider.autoCheck){
				arrowNext()
			}
			else{
				freshSlider.autoCheck = 1
			}
		},3000)
	}

	autoPlay()

});
