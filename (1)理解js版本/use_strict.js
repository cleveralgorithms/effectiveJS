"use strict";

function x() {
    "use strict";

}
 // 严格模式下 不允许重新定义arguments
// use strict 只有在脚本的顶部 或者函数的顶部才能生效
function f() {
    "use strict"
    var arguments = []; //SyntaxError: Assigning to arguments in strict mode

}