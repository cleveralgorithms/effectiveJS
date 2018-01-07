function escapebasicHTML(str) {
	return str.replace(/&/g, "&amp;")
		.replace(/</g, "&lt")
		.replace(/>/g,"&gt;")
		.replace(/"/g,"&quot;")
		.replace(/'/g,"apos;")
}

var users = records.map(function (record) {
	return record.username;
}).filter(function (username) {
	return !username;
}).map(function (username) {
	return username.toLowerCase();
})

// 更新对象的时候返回this 而不是undefined
