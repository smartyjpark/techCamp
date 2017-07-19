// const myFriend = {key : "value", num : 24};
// console.log(myFriend["key"]);
// console.log(myFriend.key);
// myFriend.age = 34;
// console.log(myFriend.age);

// function forObj(obj) {
// 	for (const a in obj){
// 	console.log(a);
// 	console.log(obj[a]);
// 	console.log("loop")
// 	}
// }
// forObj(myFriend);

// console.log(myFriend);

// console.log(Object.keys(myFriend));

// console.log(Object.values(myFriend));

// console.log(myFriend.key);

// console.log(myFriend.age);


// // for (i of myFriend)

var news = [
	{
		"title" : "sbs",
		"imgurl" : "http://static.naver.net/newsstand/2017/0313/article_img/9054/173200/001.jpg",
		"newslist" : [
				"[가보니] 가상 경주도 즐기고, 내 손으로 자동차도 만들고",
				"리캡차'가 사라진다",
				"갤럭시S8' 출시? '갤노트7' 처리 계획부터 밝혀야",
				"블로코-삼성SDS, 블록체인 사업 '맞손",
				"[블록체인 톺아보기] 퍼블릭 블록체인의 한계와 프라이빗 블록체인" 
		]
	},
	{
		"title" : "mbc",
		"imgurl" : "http://static.naver.net/newsstand/2017/0313/article_img/9033/220451/001.jpg",
		"newslist" : [
				"Lorem ipsum dolor sit amet, consectetur adipisicin",
				"ipsum dolor sit amet, consectetur adipisicin",
				"dolor sit amet, consectetur adipisicin",
				"amet, consectetur adipisicin"
		]
	},
		{
		"title" : "매일경제",
		"imgurl" : "http://static.naver.net/newsstand/2017/0314/article_img/9054/134051/001.jpg",
		"newslist" : [
				"페이스북, '감시 목적으로 데이터 사용 금지'",
				"구글, ‘저널리즘 360° 챌린지’ 프로젝트 공모전 실시",
				"효과적인 이메일 마케팅을 위한 6가지 방법",
				"amet, consectetur adipisicin"
		]
	}
];


function newListPar(obj) {
	const newArr = [];
	for (const x in obj) {
		newArr.push((obj[x].newslist));
		// for (const y in obj[x]){
		// 	newArr.push(obj[x][y]);
		// };
	};
	console.log(newArr);
};

newListPar(news);

const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}


function numPar(obj){
	const tempKeys = [];
	const resultArr = [];
	
	for(const i in obj){
		// tempKeys.push(Object.keys(obj[i]));
		if (typeof obj[i] === "object"){

			for(const j in obj[i]){
				if(typeof obj[i][j] === "number"){
					resultArr.push(j);
				}	
			}
		}
		
	}
	return resultArr;
}

console.log(numPar(widget));

// console.log(widget["text"]["data"])

// function numPar2(obj){
// 	var keys = [];
// 	var tempObj = [];
// 	keys = Object.keys(obj);
// 	for (var i = 0; i < keys.length; i++){
// 		tempObj = Object.values(keys[i]);
// 	}

// 	return keys;
// }

// console.log(numPar2(widget));



// function numParMod(obj){
// 	const tempObjArr = [];
// 	for (key in obj){
// 		if (typeof obj[key] === "object"){
// 			for (secondKey in obj[key]){
// 				if (typeof obj[key][secondKey] === "number"){
// 					tempObjArr.push(secondKey);
// 					console.log(secondKey)
// 				}
// 			}

// 		}

// 	}
// 	return tempObjArr;
// 	console.log(tempObjArr);
// }

// numParMod(widget)


var tree = [{
	"id": 1,
	"name": "Yong",
	"phone": "010-2786-9902",
	"type": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-3923-1333",
		"type": "kt",
		"childnode": [{
				"id": 115,
				"name": "hary",
				"phone": "010-2786-9302",
				"type": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-9302-0009",
					"type": "kt",
					"childnode": [{
							"id": 11592,
							"name": "cherry",
							"phone": "010-1223-9932",
							"type": "lg",
							"childnode": []
						},
						{
							"id": 11595,
							"name": "solvin",
							"phone": "010-534-7843",
							"type": "sk",
							"childnode": []
						}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "010-3796-1102",
				"type": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-1223-6713",
					"type": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-4434-4534",
						"type": "kt",
						"childnode": [{
								"id": 116890,
								"name": "wonsuk",
								"phone": "010-3434-1302",
								"type": "kt",
								"childnode": []
							},
							{
								"id": 1168901,
								"name": "chulsu",
								"phone": "010-3100-9841",
								"type": "sk",
								"childnode": []
							}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-2786-9902",
				"type": "lg",
				"childnode": []
			}
		]
	}]
}]


function nodeCom(treeObj) {
	const nodeCom = [];
	const idx = 0;
	const stack = [];
	for (key in treeObj){
		console.log(treeObj[key])
	}

}

nodeCom(tree);

function findChild(obj){
	var arrChild = [];
	var tempArrChild = [];
	for(i in obj){
		var tempArrC = obj[i];
		if (Array.isArray(tempArrC.childnode)) {
			if (tempArrC["type"] === "sk"){
			arrChild.push(tempArrC["name"]);
				}
			console.log(tempArrC);
			tempArrChild.push(tempArrC);
			findChild(tempArrC.childnode);

			}
		
		}
	return arrChild;
}

console.log(findChild(tree))




