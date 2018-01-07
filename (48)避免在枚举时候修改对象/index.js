function Member(name) {
	this.name = name;
	this.friends = [];
}

var a = new Member("Alice");
var b = new Member("Bob");
var c = new Member("Carol");
var d = new Member("Dieter");
var e = new Member("Eli");
var f = new Member("Fatima");

a.friends.push(b); //?
b.friends.push(c);
c.friends.push(e);
d.friends.push(b);

Member.prototype.inNetwork = function (other) {
	var visited = {};
	var workset = {};
	workset[this.name] = this;
	for (var name  in workset) {
		var member = workset[name];
		delete workset[name];
		if (name in visited) {
			continue;
		}
		visited[name] = member;
		if (member === other) {
			return true;
		}
		member.friends.forEach(function (friend) {
			workset[friend.name] = friend;
		})
	}
	return false;
}

a.inNetwork();//?

function WorkSet() {
	this.entries = new Dict();
}