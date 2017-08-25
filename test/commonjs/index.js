/**
 * Created by lenovo on 2017/8/24.
 * require.js AMD规范
 * 承载页面所有功能
 */

define('modal', ['jQuery', 'dialog'], function($, Dialog){
    $('.modal').show();
    Dialog.open();
});

//require.js 不用操心谁放在谁的前面
require(['carousel', 'tab', 'lazy'], function (Carousel, Tab, Lazy) {
    new Carousel('.carousel-ct');
    Tab.init('.tab-ct');
    Lazy.init('#load-more', function () {
        console.log('more');
    });
});




//2 common.js规范
var carousel = require('./carousel');
new carousel('.carousel-ct');

var tab = require('./tab');
tab.init('.tab-ct');

var lazy = require('./lazy');
lazy.init('#load-more', function () {
    console.log('more');
})