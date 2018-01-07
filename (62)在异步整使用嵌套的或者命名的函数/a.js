db.loopupAsync("url", downloadURL);
function downloadURL() {
	downloadAsync(url, function (text) {
		showContents(text);
	});
}
function showContents(url,text) {
	console.log("contents of " + url + text);
}