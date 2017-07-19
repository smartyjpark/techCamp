function makeObj(obj, parent){
	var newObj = Object.create(parent)	
  	Object.keys(obj).forEach(function(key){
  		newObj[key] = obj[key]
	});
	return newObj;
}

var healthObj = { showHealth : function() {
console.log(this.name + "asdfasdf "+this.lastTime + "okok")}
}

var myHealth = makeObj({ name : "asdfasdf", lastTime : "23:10"}, healthObj);
 myHealth.showHealth();