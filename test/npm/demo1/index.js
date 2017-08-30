var a = 1;
console.log(a);

//得到的exports是对象
var sayHello = require('./a').sayHello;
sayHello('aibin');

var marked = require('marked');
var str = marked('# hello');
console.log(str);