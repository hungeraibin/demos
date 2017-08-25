define(['jquery'], function ($) {
    function GoTop($ct) {
        this.$ct = $ct;
        this.target = $('<button>回到顶部</button>');
        this.bindEvent();
        this.createNode();
    }
    GoTop.prototype = {
        bindEvent: function () {
            this.target.on('click', function () {
                $('body').animate({scrollTop: 0}, 300);
            });
        },

        createNode: function () {
            this.$ct.append(this.target);
        }
    }

    return GoTop;
});
