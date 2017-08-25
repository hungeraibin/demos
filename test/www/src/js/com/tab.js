define(['jquery'], function ($) {
    var Tab = (function () {
        function _Tab($ct) {
            this.$ct = $ct;
            this.init();
        }
        _Tab.prototype.init = function () {
            this.$header = this.$ct.find('.header');
            this.$panel = this.$ct.find('.content > li');
            this.bind();
        };
        _Tab.prototype.bind = function () {
            var _this = this;
            this.$header.on('click', 'li', function () {
                var $this = $(this);
                var index = $this.index();
                $this.addClass('active').siblings().removeClass('active');
                _this.$panel.eq(index).addClass('active').siblings().removeClass('active');
            });
        };

        return {
            init: function ($ct) {
                $ct.each(function (index, tab) {
                    new _Tab($(tab));//转化为jQuery对象
                });
            }
        };
    })();

    return Tab;
});