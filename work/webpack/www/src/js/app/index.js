//css

/*require("../../css/carousel.css");
require("../../css/contact.css");
require("../../css/gotop.css");
require("../../css/groups.css");
require("../../css/scenery.css");
require("../../css/share.css");
require("../../css/sogatrip.css");*/

//js
var Carousel = require('../com/carousel');
var WaterFall = require('../com/waterfall');
var GoTop = require('../com/gotop');

Carousel.init($('.carousel'));
new WaterFall($('.img-container'));
new GoTop($('.gotop'));
