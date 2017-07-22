var fs = require('fs')

const userList = ['yj', 'yyc','hoho','asdf','qwnentkak','arnq']
const date = ['2017-07-02', '2017-07-03', '2017-07-04']



	let result = "ID, NAME, START_DATE\n";

	for (i=0; i<2000000; i++){
		var userID;
		var userName;
		var dateInsert
		userID = i;
		userName = userList[i%6]+userID;
		dateInsert = date[i%3];
		result = result + userID + "," + userName + "," +dateInsert+"\n";
	}

	fs.writeFile("result.csv", result, function(err) {
		if(err) throw err
})