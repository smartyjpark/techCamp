document.addEventListener('DOMContentLoaded', function(){

	healthObj.showHealth();


	function myMethod(){
		return this;
	}



});

const todo = {
	list : [],
	addTodo : function(item){
		this.list.push(item);
	},
	//한번 다시 생각해보기
	completeTodo : function(item){
		if (this.list.includes(item)){
			this.list.splice(this.list.indexOf(item), 1);
			
		}
		else {
			console.log("there are no value");
		}
	},
	getTodos : function(){
		console.log(this.list)
	},
	indexSearch : function(item){
		if (this.list.includes(item)){
			console.log(item+"'s index is "+this.list.indexOf(item));
		}
		else {
			console.log("there are no value");
		}
	}

}

function Todo (list){
	this.list = list;
}

function Health (name, lastTime){
	this.name = name;
	this.lastTime = lastTime;
}

const healthObj = {
	name : "Yejun",
	lastTime : "PM10:12", 
	showHealth : function() {
		console.log(this.name+ " sir, today at" +this.lastTime+"wake up");
	}
}

Health.prototype = healthObj;

const myHealth1 = new Health ("달리기", "20:00");
const myHealth2 = new Health ("자전거", "10:00");
const myHealth3 = new Health ("수영", "00:00");

myHealth1.showHealth()
myHealth2.showHealth()
myHealth3.showHealth()

Todo.prototype = todo;

const myTodo = new Todo(["run", "ddong"])


