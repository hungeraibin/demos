//1. 构造函数 constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    return this.name;
}
var student = new Person('aibin', 18);

//2. 工厂模式 factory 返回新的引用
function createPerson(name) {
    var person = {
        name: name,
        sayName: function () {
            console.log(this.name);
        }
    };
    return person;
}
createPerson('aibin');

//3. 单例模式 singleton
var People = (function () {
    var instance;
    function init(name) {
        return {
            name: name
        }
    }
    return {
        createPeople: function (name) {
            if (!instance) {
                instance = init(name);
            }
            return instance;
        }
    }
}());
People.createPeople('jirengu');//{name: 'jirengu}
People.createPeople('hello');//{name: 'hello}

//4. 混合模式 mixin
var Person = function (name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.sayName = function () {
    console.log(this.name);
}

var Student = function (name, age, score) {
    Person.call(this, name, age);
    this.score = score;
}
Student.prototype = create(Person.prototype);

function create(parentObj) {
    function F() {}
    F.prototype = parentObj;
    return new F();
}

Student.prototype.sayScore = function () {
    console.log(this.score);
}

var student = new Student('aibin', 18, 100);

//5. 模块模式 moudle
var Person = (function () {
   var name = 'aibin';
   function sayName() {
       console.log(this.name);
   }
   return {
       name: name,
       sayName: sayName
   }
}())

//6. 订阅发布模式 subscribe publish
var EventCenter = (function () {
    var events = {};
    function on(evt, handler) {
        events[evt] = events[evt] || [];
        events[evt].push({
            handler: handler
        });
    }
    function fire(evt, args) {
        if (!events[evt]) {
            return;
        }
        for (var i=0; i<events[evt].length; i++) {
            events[evt][i].handler(args);
        }
    }
    function off(name) {
        delete events[name];
    }
    return {
        on: on,
        fire: fire,
        off: off
    }
}());


