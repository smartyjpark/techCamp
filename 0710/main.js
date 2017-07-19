// console.log("hi");

// const myName = "yejun";
// console.log(myName);

// const myNumber = 6;

// // const getName = (name) => {
// // 	return "hello" + name;
// // }

// // const getName = fuction(){
// // 	return "hello" + name;
// // }

// const obj = {
// 	getName(name) {
// 		return "hello " + name;
// 	},
// 	getNumber(num) {
// 		return "my number is " + num;
// 	}
// }


// // console.log(getName(myName));

// console.log(obj.getName(myName));
// console.log(obj.getNumber(myNumber));


// typeof "string"
// typeof 123
// typeof []
// typeof {}

// if(0) console.log("ok");


// // const name = "woowa";
// // const result = name || "codesquad";
// // console.log(result);

// // const name = null;
// // const result = name || "codesquad";
// // console.log(result);

// const data = 9;
// const result = (data > 10) ? "ok" : "fail";
// console.log(result);

// function setName(lastName) {
// 	function printName() {
// 		const firstName = "yejun";
// 		debugger;
// 		console.log("my name is", firstName + lastName);

// 	}

// 	printName();
// 	// console.log(firstName);
// }

// setName("YJ")

// //forEach 메소드 실습

// const arr = ["crong", "jk", "honux", ["cony", "brown"]];
// const lineFriend = arr[3];
// const brown = lineFriend[1];
// console.log(brown === arr[3][1]);
// lineFriend.push("sally");
// console.log(lineFriend);

// const items = ['1', '2', '3'];
// console.log(items);
// const copy = []
// console.log(copy);


// //forEach 메소드 실습


// // items.forEach(function(item){
// // 	copy.push(item);
// // });

// items.forEach((item)=>console.log(item));

// console.log(copy);


//map 메소드 실습
const arr = ["crong", 1, "jk", "honux"];
plusDollar = arr.map(function(x){
	if (typeof x === typeof "")
		return x+="$"
	else return x;
});
console.log(plusDollar);

//filter 메소드 실습
const filterArr1 = ["", 0, "true", "jk", undefined, null, false, true];
console.log(filterArr1)

filteredArr = filterArr1.filter(function(i){
	return i;
});

console.log(filteredArr);

fuction makeMap(parArr){
	for (i=0; i<parArr.length; i++) {
	}
}