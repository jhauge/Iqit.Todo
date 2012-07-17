/// <reference path="todo.js" />

// namespace ---------------------------------------------------------
var iqit = iqit || {};

// TodoSet class -----------------------------------------------------
iqit.TodoSet = function (data) {
    this.id = data.id || "newset";
    this.title = data.title || "No title";
    this.todos = new Array();
}

iqit.TodoSet.prototype = {
    toString: function () {
        return this.id + " : " + this.title;
    }
}