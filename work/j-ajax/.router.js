function setRouter(app){ 
 var router = app; 

app.get('/loadMore', function (req, res) {
    var curIndex = req.query.index;
    var length = req.query.length;
    var data = [];
    for(var i = 0; i < length; i++) {
        data.push('点开查看新闻' + (parseInt(curIndex) + i));
    }
    res.send(data);
});}
 module.exports.setRouter = setRouter