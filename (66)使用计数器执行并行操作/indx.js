function downloadAsunc(urls, onsuccess, onerror) {
	var pendding = url.length;
	var result = [];
	if (pendding === 0) {
		setTimeout(onsuccess.bind(null, result), 0);
		return;
	}
	urls.forEach(function (url, i) {
		downloadAsunc(url, function (text) {
			if (result) {
				result[i] = text;
				pendding--;
				if (pendding === 0) {
					onsuccess(result);
				}
			}
		}, function (error) {
			if (result) {
				result = null;
				onerror(error);
			}
		});
	});
}
