// append
var node = document.createElement("LI");
var textnode = document.createTextNode("melon");
var list = document.getElementById("myList");
node.appendChild(textnode);
list.appendChild(node);

list.removeChild(list.childNodes[11]);


//insert
var newItem = document.createElement("LI");
var textnode = document.createTextNode("Water");
newItem.appendChild(textnode);

var list = document.getElementById("myList");
list.insertBefore(newItem, list.childNodes[0]);

// move
var list = document.getElementById("myList");
var moveItem = list.childNodes[1];
list.removeChild(list.childNodes[1]);
list.insertBefore(moveItem, list.childNodes[7]);

// remove node by filtering class
var item = document.querySelectorAll(".red");
console.log(item)
for (i=0;i<item.length;i++){
	item[i].parentNode.removeChild(item[i]);
}


// pratice 5

var item = document.querySelectorAll(".blue")
console.log(item[0].parentNode.parentNode)
	item.forEach(function(i){
		console.log(item[i].parentNode.parentNode);
	});
// 아직 진행중