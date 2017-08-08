function setRouter(app){ 
 var router = app; 

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
});}
 module.exports.setRouter = setRouter