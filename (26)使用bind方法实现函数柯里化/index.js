function simpleURL(protocol,domain,path) {
	return protocol + "://" + domain + "/" + path;
}
/*var urls = paths.map(function (path) {
	return simpleURL("http", siteDomain, path);
})*/

var urls = path.map(simpleURL.bind(null, "http", siteDOmain));

