﻿/// <reference path="../libs/knockout-2.1.0.debug.js" />

// Namespace --------------------------------------------------------
var iqit = iqit || {};

// Todo class -------------------------------------------------------
iqit.Todo = function (data) {
    this.id = data.id || "newTodo";
    this.title = ko.observable(data.title || "No title provided");
    this.comment = ko.observable(data.comment || "");
    this.subtasks = new Array();
}

iqit.Todo.prototype = {
    toString: function () {
        return this.id + " : " + this.title();
    }
}