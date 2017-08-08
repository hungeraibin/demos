function setRouter(app){ 
 var router = app; 

app.get('/friends', function (req, res) {
    //req.query 可以获取请求参数
    var username = req.query.username;
    var ret = ['nobody'];
    if (username === 'ruoyu') {
        ret = ['饥人谷', '前端'];
    }
    //res.send 用于发送数据
    res.send(ret);
});}
 module.exports.setRouter = setRouter