    function WaterFall($ct) {
        var _this = this;
        this.$ct = $ct;
        this.isLoading = false;
        this.columnLength = parseInt(this.$ct.width() / this.$ct.find('li').width());
        this.imgArr = [];
        for (var i = 0; i < this.columnLength; i++) {
            this.imgArr[i] = 0;
        }

        this.$ct.find('li').each(function (index, li) {
            _this.init($(li));
        });
        this.bind();
    }

    WaterFall.prototype.init = function ($node) {
        var _this = this;
        var minHeight = Math.min.apply(null, this.imgArr);
        var minIndex = this.imgArr.indexOf(minHeight);
        $node.css({
            top: _this.imgArr[minIndex],
            left: minIndex * $node.outerWidth(true)
        });

        this.imgArr[minIndex] += $node.outerHeight(true);
        _this.$ct.height(Math.max.apply(null, this.imgArr));

    };

    WaterFall.prototype.bind = function () {
        var _this = this;
        $('.load-more button').on('click', function () {
            if (_this.isLoading) return;
            _this.isLoading = true;
            var urls = _this.getUrls(3);
            _this.render(urls);

            /* $.each(urls, function (index, url) {
             console.log(url)
             _this.render(url);
             });*/
        });
    };

    WaterFall.prototype.render = function (url) {
        var _this = this;
        var $html = $('<li class="h3"><img src="' + url[0] + '"><p>Hunger</p> <p>Stay hungery</p> </li>');
        $html.find('img').on('load', function () {
            _this.$ct.append($html);
            //console.log($node);
            _this.init($html);
            _this.isLoading = false;
        });

        var $html1 = $('<li class="h1"><img src="' + url[1] + '"><p>Aibin</p> <p>Stay foolish</p> </li>');
        $html1.find('img').on('load', function () {
            _this.$ct.append($html1);
            //console.log($node);
            _this.init($html1);
        });

        var $html2 = $('<li class="h2"><img src="' + url[2] + '"><p>Hunger Aibin</p> <p>Stay hungery. Stay foolish</p> </li>');
        $html1.find('img').on('load', function () {
            _this.$ct.append($html2);
            //console.log($node);
            _this.init($html2);
        });
    };

    WaterFall.prototype.getUrls = function (num) {
        var urls = [];
        var width, height;
        for (var i = 0; i < num; i++) {
            width = Math.floor(Math.random() * 40 + 300);
            height = Math.floor(Math.random() * 800 + 200);
            urls.push("https://unsplash.it/" + width + "/" + height + "/?random");
        }
        return urls;
    };

    module.exports = WaterFall;
