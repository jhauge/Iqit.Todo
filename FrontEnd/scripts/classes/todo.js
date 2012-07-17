// Namespace --------------------------------------------------------
var iqit = iqit || {};

// Todo class -------------------------------------------------------
iqit.Todo = function (data) {
    this.id = data.id || "newTodo";
    this.title = data.title || "No title provided";
    this.comment = data.comment || "";
    this.subtasks = new Array();
}

iqit.Todo.prototype = {
    toString: function () {
        return this.id + " : " + this.title;
    }
}