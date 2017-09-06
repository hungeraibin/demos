import Vue from 'vue'
import AV from 'leancloud-storage'

var APP_ID = 'DBLBeemGFMXcOIOHgnVOmDLo-gzGzoHsz';
var APP_KEY = 'CuFRxlxU2a2HySwEdYqm6o98';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var app = new Vue({
    el: '#app',
    data: {
        actionType: 'signUp',
        formData: {
            username: '',
            password: ''
        },
        currentUser: null,
        newTodo: '',
        todoList: []
    },
    created: function () {
        window.onbeforeunload = () => {
            let dataString = JSON.stringify(this.todoList);
            window.localStorage.setItem('myTodos', dataString);
            window.localStorage.setItem('myInput', this.newTodo)
        };
        let oldDatastring = window.localStorage.getItem('myTodos');
        let oldData = JSON.parse(oldDatastring);
        this.todoList = oldData || [];
        this.newTodo = window.localStorage.getItem('myInput')
        this.currentUser = this.getCurrentUser();
    },
    methods: {
        addTodo: function () {
            this.todoList.push({
                title: this.newTodo,
                createdAt: new Date().toLocaleString(),
                done: false // 添加一个 done 属性
            });
            this.newTodo = '';  // 变成空
        },
        removeTodo: function (todo) {
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
        },
        signUp: function () {
            let user = new AV.User();
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);
            user.signUp().then((loginedUser) => {
                this.currentUser = this.getCurrentUser();
            }, (error) => {
                alert('注册失败');
            });
        },
        login: function () {
            AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => {
                this.currentUser = this.getCurrentUser();
            }, function (error) {
                alert('登录失败');
            });
        },
        getCurrentUser: function () {
            let current = AV.User.current();
            if (current) {
                let {id, createdAt, attributes: {username}} = current;
                return {id, username, createdAt};
            } else {
                return null;
            }
        },
        logout: function () {
            AV.User.logOut();
            this.currentUser = null;
            window.location.reload();
        }
    }
});

