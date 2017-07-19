//map 구현
Array.prototype.makeMap = function(callback) {
	const tempArr = [];
	this.forEach(function(item){
		tempArr.push(callback(item));
	});
	return tempArr;
}

//filter 구현
Array.prototype.setFilter = function(callback) {
	const tempArr = [];
	this.forEach(function(item){
		if (callback(item))
			tempArr.push(item);
	});
	return tempArr;
}


//makeMap 테스트 코드
const arr = ["crong", 1, "jk", "honux"];
plusDollar = arr.makeMap(function(x){
	if (typeof x === typeof "")
		return x+="$"
	else return x;
});
console.log(plusDollar);


//setFilter 테스트 코드
const filterArr1 = ["", 0, "true", "jk", undefined, null, false, true];
console.log(filterArr1)

filteredArr = filterArr1.setFilter(function(i){
	return i;
});
console.log(filteredArr);