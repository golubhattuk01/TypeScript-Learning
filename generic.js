"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quiz = /** @class */ (function () {
    function Quiz(name, author, subject) {
        this.name = name;
        this.author = author;
        this.subject = subject;
    }
    return Quiz;
}());
var Course = /** @class */ (function () {
    function Course(name, author, subject) {
        this.name = name;
        this.author = author;
        this.subject = subject;
    }
    return Course;
}());
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.items = [];
    }
    Sellable.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Sellable.prototype.getItems = function () {
        console.log("Items in the list are: ");
        this.items.map(function (item) {
            console.log(item.name);
        });
    };
    return Sellable;
}());
var quiz = new Quiz("Quiz1", "Author1", "Subject1");
var course = new Course("Course1", "Author1", "Subject1");
var sellable = new Sellable();
sellable.addItem(quiz);
// sellable.addItem(course);
sellable.getItems();
