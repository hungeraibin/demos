import Vue from 'vue'

var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: []
    },
    created: function () {
        window.onbeforeunload = () => {
            let dataString = JSON.stringify(this.todoList)
            window.localStorage.setItem('myTodos', dataString)
            window.localStorage.setItem('myInput', this.newTodo)
        }
        let oldDatastring = window.localStorage.getItem('myTodos')
        let oldData = JSON.parse(oldDatastring)
        this.todoList = oldData || []
        this.newTodo = window.localStorage.getItem('myInput')
    },
    methods: {
        addTodo: function () {
            this.todoList.push({
                title: this.newTodo,
                createdAt: new Date().toLocaleString(),
                done: false // 添加一个 done 属性
            })
            this.newTodo = ''  // 变成空
        },
        removeTodo: function (todo) {
            let index = this.todoList.indexOf(todo)
            this.todoList.splice(index, 1)
        }
    }
})

