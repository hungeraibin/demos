/**
 * Created by lenovo on 2017/8/24.
 */

// *Common.js
var people = {
    name: 'ruoyu',
    sayName: function () {
        console.log(this.name);
    }
};

module.exports = people; //出口

//CMD 加个头
define(function (require, exports, module) {
    var people = {
        name: 'ruoyu',
        sayName: function () {
            console.log(this.name);
        }
    };
    module.exports = people;
    var $ = require('jquery.js');

});


//require.js
define(['dependency'], function () {
    var name = 'aibin';
    function printName() {
        console.log(name);
    }

    return {
        printName: printName
    };
});