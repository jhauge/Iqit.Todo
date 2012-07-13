/// <reference path="../knockout-2.1.0.js" />
/// <reference path="../classes/todoRepository.js" />
/// <reference path="../classes/todoSet.js" />
/// <reference path="../classes/todo.js" />

var TodosModel = function (todoSets) {
    var self = this;

    // Data
    self.selectedSetId = ko.observable(todoSets[0].id);
    self.todoSets = ko.observableArray(todoSets);
    self.todos = ko.observableArray(todoSets[0].todos);

    // Behaviours
    self.selectSet = function (set) {
        self.selectedSetId(set.id);
        self.todos(set.todos);
    }

    self.addTodo = function () {
        var todo = new iqit.Todo("task5");
        todo.title = "Umbraco on an Azure website";
        self.todos.push(todo);
    };

    self.removeTodo = function () {
        self.todos.remove(this);
    };
};

$(function () {
    ko.applyBindings(new TodosModel(new iqit.TodoRepository().getAllSets()));
});