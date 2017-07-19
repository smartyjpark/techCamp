function ajax(){

	var oReq = New XMLHttpRequest();
	oReq.addEventListener("load", function(){
		var result = this.responseText;
	});;
	oReq.open("GET", "");
	oReq.send();
	return result;
}