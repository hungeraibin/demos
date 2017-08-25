define(['jquery'], function ($) {
    var Carousel = (function () {
        function _Carousel($container) {
            this.$container = $container;
            this.init();
            this.autoPlay();
            this.bind();
        }

        _Carousel.prototype.init = function () {
            this.$imgCt = this.$container.find($('.img-ct'));
            this.$imgs = this.$container.find($('.img-ct > li'));
            this.$next = this.$container.find($('.next'));
            this.$pre = this.$container.find($('.pre'));
            this.$bullet = this.$container.find($('.bullet > li'));
            this.$arrow = this.$container.find($('.arrow'));

            this.clock = null;
            this.isAnimate = false;
            this.pageIndex = 0;
            this.imgWidth = this.$imgs.width();
            this.imgCount = this.$imgs.length;

            this.$imgCt.append(this.$imgs.first().clone());
            this.$imgCt.prepend(this.$imgs.last().clone());
            this.$imgCt.css({left: -this.imgWidth});
        };
        _Carousel.prototype.bind = function () {
            var _this = this;
            this.$next.on('click', function (e) {
                e.preventDefault();
                _this.playNext(1);
            });

            this.$pre.on('click', function (e) {
                e.preventDefault();
                _this.playPre(1);
            });

            this.$bullet.on('click', function () {
                var bulletIndex = $(this).index();
                if (bulletIndex > _this.pageIndex) {
                    _this.playNext(bulletIndex - _this.pageIndex);
                } else if (bulletIndex < _this.pageIndex) {
                    _this.playPre(_this.pageIndex - bulletIndex);
                }
            });

            this.$container.on('mouseenter', function () {
                _this.stopAuto();
                _this.$arrow.addClass('active')
            });

            this.$container.on('mouseleave', function () {
                _this.autoPlay();
                _this.$arrow.removeClass('active');
            });
        };
        _Carousel.prototype.playNext = function (lenth) {
            var _this = this;
            if (this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left: '-=' + lenth * _this.imgWidth
            }, function () {
                _this.pageIndex += lenth;
                if (_this.pageIndex === _this.imgCount) {
                    _this.pageIndex = 0;
                    _this.$imgCt.css({left: -_this.imgWidth});
                }
                _this.setBullet();
                _this.isAnimate = false;
            });
        };
        _Carousel.prototype.playPre = function (lenth) {
            var _this = this;
            if (this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left: '+=' + lenth * _this.imgWidth
            }, function () {
                _this.pageIndex -= lenth;
                if (_this.pageIndex < 0) {
                    _this.pageIndex = _this.imgCount - 1;
                    _this.$imgCt.css({left: -_this.imgWidth * _this.imgCount});
                }
                _this.setBullet();
                _this.isAnimate = false;
            });
        };
        _Carousel.prototype.setBullet = function () {
            this.$bullet.removeClass('active').eq(this.pageIndex).addClass('active');
        };
        _Carousel.prototype.autoPlay = function () {
            var _this = this;
            this.clock = setInterval(function () {
                _this.playNext(1);
            }, 3000);
        };
        _Carousel.prototype.stopAuto = function () {
            var _this = this;
            clearInterval(_this.clock);
        };

        return {
            init: function ($container) {
                $container.each(function (index, node) {
                    new _Carousel($(node));
                });
            }
        };
    })();

    return Carousel;
});