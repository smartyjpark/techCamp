document.addEventListener('DOMContentLoaded', function(){

	const dotEvent = document.querySelector(".slides_pagination")
	dotEvent.addEventListener("click", function(e){
		console.log(e)
		const target = e.target;
		console.log(target.index)
		dotTargetClass = target.innerHTML;
		requestAnimationFrame(clickPhoto);
	}.bind(this));

	const dirEvent = document.querySelector(".slides_navi")
	dirEvent.addEventListener("click", function(e){
		const target = e.target;
		dirTargetClass = target.className;
		nextAndPre();
	});

});



let dotTargetClass = 10;
let dirTargetClass;

function clickPhoto() {
	const allPhotos = document.querySelectorAll(".main_slides_lst > li")
	allPhotos.forEach(function(photo){
		photo.style.zindex = 0;
		photo.style.opacity = 0;
		photo.style.transition = "0.7s";
	});
	const targetPhoto = allPhotos[dotTargetClass];
	targetPhoto.style.zindex = 50;
	targetPhoto.style.display="inline-block"
	targetPhoto.style.opacity = 1;
	targetPhoto.style.transition = "1.2s";	
	requestAnimationFrame(clickPhoto)
}


function nextAndPre(){
	let allPhotos = document.querySelectorAll(".main_slides_lst > li")
	if (allPhotos[dirTargetClass] === "slides_prev"){
		dotTargetClass-=1
		console.log("prev")
		requestAnimationFrame(clickPhoto)
	}
	else if (allPhotos[dirTargetClass] === "slides_next"){
		dotTargetClass+=1
		console.log("next")
		requestAnimationFrame(clickPhoto)
	}
}
