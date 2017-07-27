const assert = chai.assert;

describe('equal', function() { 
	it('should not equal', function() {
		assert.equal(true, false); 
	});
})

describe('array test', function(){
	it('equal dummy test', function(){
		var arr = [];

		arr.push(1,2,'3');
		assert.equal(arr.length, 3);
	});
})

describe('type check', function(){
	it('should return string when the value is string', function(){
		var str = "Hi I'm Yejun";
		var result = checkType(str+3);
		assert.equal(result, 'string');
	});
})

describe('dom create test', function(){
	it('add class it', function(){
		var domSelector = document.querySelector("body");
		var addedClass = "createdDom";
		addClass(domSelector, addedClass);
		var classArray = Array.from(domSelector.classList);
		assert.include(classArray, addedClass);
	})
})



describe('event on', function(){
	it('eventSuccess', function(){
		const el = document.createElement("h2")
		el.classList.add("tempclass")
		const evt = {
			target: el,
			preventDefault(){
				return true;
			}
		}
		clickClearClassHandler(evt);
		assert.equal(el.className, "")
	});
})

describe('async ajax', function(){
	it('should get "code-squad" name when receive ajax response', function(){
	const url = 'http://52.78.212.27:8080/woowa/best';
	const fn = function(result) {
		const category = result[0].category_id;
		assert.equal(category, '17011200');
		console.log(1);
	}	
	xhr(url,fn);
	});
})

describe('another test', function(){
	it('should equal..', function() {
		assert.equal(true,true);
		console.log(2); 
	});
})

describe('start event check', function(){
	it('function is ok', function() {
		const touchTest = new Swipe("h3", "h3")
		const touchEvent = {
			changedTouches : [{pageX: 12}]
		}
		touchTest.setStartPoint(touchEvent);
		assert.equal(touchTest.startPoint, 12); 
	});
})

describe('touch event check', function(){
	it('function is ok', function() {
		const touchTest = new Swipe("h3", "h3")
		touchTest.startPoint = 42;
		const touchEvent = {
			changedTouches : [{pageX: 12}]
		}
		touchTest.setCurrentPoint(touchEvent)
		touchTest.setMoveDistance();
		assert.equal(touchTest.moveDistance, -30*0.5); 
	});
})

describe('swipeCheck check', function(){
	it('function is ok', function() {
		const touchTest = new Swipe("h3", "h3")
		touchTest.pointDistance = 3;
		touchTest.index = 0;
		touchTest.dir = 0;
		touchTest.swipeCheck();
		assert.equal(touchTest.selector.style.transition, "0.15s"); 
	});
})


