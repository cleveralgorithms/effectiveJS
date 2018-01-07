var app = new Wiki(wiki.formats.MEDIAWIKI);
function Wiki(format) {
	this.format = format;
}

Wiki.prototype.displayPage=function (source) {
	var page = this.format(source);
	var title = page.getTitle();
	var author = page.getAuthor();
	var output = page.toHTML();
}

function MWPage() {
	Page.call(this, source); // 调用父类的构造器
}

MWPage.prototype = Object.create(Page.prototype);
// ....


Wiki.formats.MEDIAWIKI = function (source) {
	return new MWPage(source);
}
