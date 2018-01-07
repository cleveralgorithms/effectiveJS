var p = downloadP("file.txt");
p.then(function (file) {
	console.log("file" + file);
})