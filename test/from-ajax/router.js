/**
 * 页面路由，从模块渲染页面渲染页面
 * http://localhost:8080/user
 * 支持 ejs, jade 模块
 */


app.get('/user', function (req, res) {
    var username = req.query.username;
    var friends;
    if (username === 'ruoyu') {
        friends = ['前端', '饥人谷'];
    } else {
        friends = ['nobody'];
    }

    res.render('user.ejs', {
       friends: friends
    });
});

app.post('/user', function (req, res) {
    var username = req.body.username;
    var friends;
    if (username === 'ruoyu') {
        friends = ['前端', '饥人谷'];
    } else {
        friends = ['nobody'];
    }

    res.render('user.ejs', {
        friends: friends
    });
});