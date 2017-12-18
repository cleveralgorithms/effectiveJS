(function () {
    // file11.js
    "use strict";

    function f() {
    }
})();


(function () {
    // file2.js
    //no strict mode
    function f() {
        var arguments = [];
        console.log('aaaa');
    }
})();
