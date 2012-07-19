/// <reference path="../libs/" />
/// <reference path="../libs/knockout-2.1.0.js" />
/// <reference path="../classes/todoRepository.js" />
/// <reference path="../classes/todoSet.js" />
/// <reference path="../classes/todo.js" />

var TodosModel = function (todoSets) {
    var self = this;

    // Data
    self.todoSets = ko.observableArray(todoSets);
    self.selectedTodo = ko.observable();
    self.selectedSetId = ko.observable(todoSets[0].id);
    self.todos = ko.observableArray(todoSets[0].todos);
    self.addingTodo = ko.observable(false);
    self.addTodoTitle = ko.observable();
    self.addTodoComment = ko.observable();

    // Behaviours
    self.selectSet = function (set) {
        self.selectedSetId(set.id);
        self.todos(set.todos);
    }

    self.addTodo = function () {
        self.selectedTodo(null);
        self.addingTodo(true);
        $("#dialogs").show();
    };

    self.editTodo = function () {
        self.selectedTodo(this);
        self.addTodoTitle(this.title());
        self.addTodoComment(this.comment());
        $("#dialogs").show();
        self.addingTodo(true);
    };

    self.cancelTodo = function () {
        self.addingTodo(false);
        self.addTodoTitle("");
        self.addTodoComment("");
        $("#dialogs").hide();
    };

    self.createTodo = function () {
        if (self.selectedTodo()) {
            self.selectedTodo().title(this.addTodoTitle());
            self.selectedTodo().comment(this.addTodoComment());
        }
        else {
            var todo = new iqit.Todo({ title: this.addTodoTitle(), comment: this.addTodoComment() });
            self.todos.push(todo);
        }
        self.addingTodo(false);
        self.addTodoTitle("");
        self.addTodoComment("");
        $("#dialogs").hide();
    };

    self.removeTodo = function () {
        self.todos.remove(this);
    };
};

$(function () {
    ko.applyBindings(new TodosModel(new iqit.TodoRepository().getAllSets()));
});