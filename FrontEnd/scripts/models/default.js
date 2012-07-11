/// <reference path="../knockout-2.1.0.js" />
/// <reference path="../classes/todo.js" />

var task1 = new iqit.Todo("task1");
task1.title = "AMS PDF refactoring";
task1.comment = "- Lav ny masterpage";

var task2 = new iqit.Todo("task2");
task2.title = "HTML5 app præsentation";

var task3 = new iqit.Todo("task3");
task3.title = "Umbraco projekt setup";
task3.comment = "- Samarbejde med LJA";

var todosData = [
    task1,
    task2,
    task3
];

var TodosModel = function (todos) {
    var self = this;
    self.todos = ko.observableArray(ko.utils.arrayMap(todos, function (todo) {
        return {
            id: todo.id,
            title: todo.title,
            comment: todo.comment
        };
    }));
};

$(function () {
    ko.applyBindings(new TodosModel(todosData));
});