/**
 * Created by lenovo on 2017/8/24.
 * node b.js
 */
var p = require('./a');
p.sayName();


//require.js加载模块
require(['dependency'], function (p) {
    p.printName();
});