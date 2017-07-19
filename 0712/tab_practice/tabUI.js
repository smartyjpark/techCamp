window.addEventListener('DOMContentLoaded', function(){

	const listTab = document.querySelectorAll(".tab")
	const listContent = document.querySelectorAll(".mainView > section")

	// listTab.forEach(function(tab){
	// 	tab.addEventListener("click", function(i){
	// 		// clearTab();
	// 		clearObj(listTab, "tab")
	// 		clearObj(listContent, "")

	// 		tab.className += " selectedTab";

	// 		// clearCon();
	// 		const selCon = "my_"+tab.id;
	// 		document.getElementById(selCon).className="eleDisplayShow";
	// 		// selectContent(tab.id);

	// 	});
	// });

	// function clearObj(val, modName){
	// 	val.forEach(function(i){
	// 		i.className = modName;
	// 	});
	// }




	// function clearTab(){
	// 	listTab.forEach(function(tab){
	// 		tab.className = "tab"
	// 	});
	// }

	// function clearCon(){
	// 	listContent.forEach(function(con){
	// 		con.className = ""
	// 	});
	// }
	// function selectContent(i){
	// 	listContent.forEach(function(content){
	// 		contnet.style.display="none"
	// 	});
	// 	document.querySelector("my_"+i).style.display="block";
	// }

	function listPar(){
		listTab.forEach(function(tab){
			tab.addEventListener("click", function(i){
				// clearTab();


				// clearCon();
				const selCon = "my_"+tab.id;
				document.getElementById(selCon).innerHTML=htData.body;
				// selectContent(tab.id);

			});
		});
	}

	function clearObj(val, modName){
		val.forEach(function(i){
			i.className = modName;
		});
	}

	function ajax() {
		const oReq = new XMLHttpRequest(); 
		oReq.addEventListener("load", function(e) {
			const htData = JSON.parse(oReq.responseText);
			document.getElementById("my_position").innerHTML = htData.body;
			// goExec(htData); 
		});
		oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/1");
		oReq.send(); 
	}



})

