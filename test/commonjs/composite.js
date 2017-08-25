/**
 * Created by lenovo on 2017/8/24.
 */
(function (name, definition, context) {
    if (typeof module != 'undefined' && module.exports) {
        // 在 CMD 规范下 (node)
        module.exports = definition();
    } else if (typeof context['define'] == 'function' && (context['define']['amd'] || context['define']['cmd'])  ) {
        //在 AMD 规范下(RequireJS) 或者 CMD 规范下(SeaJS)
        define(definition);
    } else {
        //在浏览器环境下
        context[name] = definition();
    }
})('sample', function () {

    var sample = (function () {
        "use strict";

        var a = 1;

        function inc(){
            a++;
        }

        function get(){
            return a;
        }

        return {
            inc: inc,
            get: get
        }

    })();

    return sample;

}, this);

//1
(function (name, definition, context) {
})('sample', function () {}, this);//node服务器this指全局作用域global, 浏览器this指window
//2
/*node端
    module.exports = function () {
        return 1
    }
 */
/*AMD规范
    define(function () {
        var obj = {a: 1, b: 3};
        return obj;
    });
 */
/*浏览器下
    window.sample = function() {}
 */

(function (name, definition, context) {
    if (typeof module != 'undefined' && module.exports) {
        // 在 CMD 规范下 (node)
        module.exports = definition(); //module.exports = function () { return 2}
    } else if (typeof context['define'] == 'function' && (context['define']['amd'] || context['define']['cmd'])  ) {
        //在 AMD 规范下(RequireJS) 或者 CMD 规范下(SeaJS)
        define(definition);
    } else {
        //在浏览器环境下
        context[name] = definition();
    }
})('sample', function () {}, this);




