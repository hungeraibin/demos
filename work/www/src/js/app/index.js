define(['jquery', 'com/carousel', 'com/waterfall', 'com/gotop'], function ($, Carousel, WaterFall, GoTop) {
    Carousel.init($('.carousel'));
    new WaterFall($('.img-container'));
    new GoTop($('.gotop'));
});