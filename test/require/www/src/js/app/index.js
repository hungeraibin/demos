/**
 * Created by lenovo on 2017/8/24.
 */
define(['jquery', 'com/gotop', 'com/carousel', ], function ($, GoTop, Carousel) {
    new GoTop();
    Carousel.init($('.carousel'));
});
