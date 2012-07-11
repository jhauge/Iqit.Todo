// Namespace --------------------------------------------------------
var iqit = iqit || {};

// Todo class -------------------------------------------------------
iqit.Todo = function (id) {
    this.id = id;
    this.title = "";
    this.comment = "";
}

iqit.Todo.prototype = {
    toString: function () {
        return this.id + " : " + this.title;
    }
}