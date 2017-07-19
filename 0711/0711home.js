// 첫번째 방법, Array prototype의 slice.call 사용
var divNodeList = document.querySelectorAll('div');
// 'div' elements로 구성된 node list 호출
var divArray = Array.prototype.slice.call(divNodeList);
// Array Prototype의 slice.call을 통해 array로 변환




//두번째 방법, apply 메소드 활용
const divNodeList2 = document.querySelectorAll('div');
// 'div' elements로 구성된 node list 호출
const divArray2 = Array.apply(null, divNodeList2);
// apply method 을 통해 array로 변환



// 비교 및 테스트
console.log(toString.call(divNodeList));
console.log(toString.call(divArray));
console.log(toString.call(divArray2));