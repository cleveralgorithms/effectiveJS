 // object\\
/*
 var obj  = {},f;
 obj.temporary = f;
 var result = obj.temporary(arg1, arg2, arg3);
 delete obj.temporary;
*/
 var dict = {"foo":'111111'};
 dict.hasOwnProperty("foo");//?
 var table = {
	 entries: [],
	 addEntry: function (key, value) {
		 this.entries.push({key: key, value: value});
	 },
	 forEach:function (f,thisArg) {
		 var entries = this.entries;
		 for (var i=0,n=entries.length;i<n;i++) {
			 var entry = entries[i];
			 f.call(thisArg,entry.key,entry.value,i)
		 }
	 }
 };