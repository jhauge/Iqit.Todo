// Namespace --------------------------------------------------------
var iqit = iqit || {};

// Todo class -------------------------------------------------------
iqit.Todo = function (id) {
    this.id = id;
    this.title = "";
    this.comment = "";
    this.subtasks = new Array();
}

iqit.Todo.prototype = {
    toString: function () {
        return this.id + " : " + this.title;
    }
}