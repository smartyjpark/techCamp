function makeObj(obj, parent){
	var newObj = Object.create(parent)	
	console.log(newObj);
  	Object.keys(obj).forEach(function(key){
  		newObj[key] = obj[key]
		// const val = obj[key];
		// console.log({key : val})
		// newObj = Object.assign({key : val}, obj)
	});
	console.log(newObj);
	return newObj;
}

var healthObj = { showHealth : function() {
console.log(this.name + "asdfasdf "+this.lastTime)}
}

var myHealth = makeObj({ name : "asdfasdf", lastTime : "23:10"}, healthObj);
 myHealth.showHealth();