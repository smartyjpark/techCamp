class Tab {
	constructor(){
		this.url = "http://52.78.212.27:8080/woowa/"
		this.eventTarget = document.querySelector('#best-tabs');
		this.tabCache = {};

	}

	eventOn(){
		this.eventTarget.addEventListener("click", function(e){
			document.querySelector("#best-tabs a.now").classList.remove("now")
			const target = e.target;
			target.classList.toggle("now");
			this.cacheCheck(target.id);

		}.bind(this));
	}

	cacheCheck(id){
		if (this.tabCache[id]){
			this.contentOn(this.tabCache[id])
			console.log("cache data output!");
		}
		else {
			this.tabAjax(id);
		}
	}

	tabAjax(id){
		const targetId = id;
		const requestAjax = new XMLHttpRequest();
		requestAjax.addEventListener("load", function(e){
			const data = JSON.parse(requestAjax.responseText);
			this.tabCache[id]=data;
			console.log("cache save!");
			this.contentOn(data, targetId);
			

		}.bind(this))
		requestAjax.open("GET", this.url+"best/"+id);
		requestAjax.send();
	}

	contentOn(data, id){
		const source = document.querySelector("#tab-contents").innerHTML;
		const insertTemplate = Handlebars.compile(source);
		const html = insertTemplate(data);
		document.querySelector("#best-container").innerHTML = html;
		this.modalOn(id);
	}

	modalOn(id){
		const prd = document.querySelector("#best-content-ul")
		prd.addEventListener("click", function(e){
			const modalId = e.target.parentNode.id;
			this.modalAjax(modalId);
		}.bind(this));

	}


	modalAjax(id){
		const targetId = id;
		const requestAjax = new XMLHttpRequest();
		requestAjax.addEventListener("load", function(e){
			const data = JSON.parse(requestAjax.responseText);
			this.setModal(data);

		}.bind(this))
		requestAjax.open("GET", this.url+"detail/"+id);
		requestAjax.send();
	}

	setModal(data){
		const modalData = data.data;
		// console.log(modalData)
		const source = document.querySelector("#modal-contents").innerHTML;
		const insertTemplate = Handlebars.compile(source);
		const html = insertTemplate(modalData);
		document.querySelector(".best-modal").innerHTML = html;
		this.modalEvent()

	}

	modalEvent(){
		const modal = document.getElementById('myModal');
		const span = document.getElementsByClassName("close")[0];

		modal.style.display = "block";
	    span.onclick = function() {
	    	modal.style.display = "none";
		}

		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}
	}



}

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
		// console.log(this.index)
		targetDot.style.zindex = 50;
		targetDot.style.display="inline-block"
		targetDot.style.opacity = 1;
		targetDot.style.transition = "1.2s";	
		// targetDot.style += {zindex: '50', opacity: '1', display: 'none', transition: '1.2s'};
	}

	dotsInnerEvent(e, animate){
		this.index = e.target.innerHTML;
		requestAnimationFrame(animate);
	}

	setSlider(){
		this.dotsListControl();
		this.targetDotControl();
	}

	arrowIndex(e){
		if (e.target === this.slideNext){
			this.index ++;
			this.arrowOverFlow();
		}
		if (e.target === this.slidePrev){
			this.index --;
			this.arrowOverFlow();
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
		// console.log("animate")
		requestAnimationFrame(animate);
	}

	startSlider(){
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
				// console.log("auto check")
				if(freshSlider.autoCheck){
					arrowNext()
				}
				else{
					freshSlider.autoCheck = 1;
				}
			},3000)
		}

		autoPlay()
	}


}

document.addEventListener('DOMContentLoaded', function(){

	//tab
	const tabs = new Tab();
	tabs.tabAjax(17010200);
	tabs.eventOn();


	Slider.prototype.startSlider();

});

