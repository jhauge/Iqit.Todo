/// <reference path="todoSet.js" />
/// <reference path="todo.js" />

var iqit = iqit || {};

iqit.TodoRepository = function () {
    this.dbName = "iqit.todoDB";
}

iqit.TodoRepository.prototype = {
    getAllSets: function () {
        var workSet = new iqit.TodoSet({ id: "workset", title: "Work" });
        var workTodo1 = new iqit.Todo({ id: "worktodo1", title: "AMS pdf refactoring", comment: "- Lav setup med separat masterpage" });
        var workTodo2 = new iqit.Todo({ id: "worktodo2", title: "Umbraco project setup" });
        var workTodo3 = new iqit.Todo({ id: "worktodo3", title: "Umbraco on Azure Website" });
        workSet.todos.push(workTodo1, workTodo2, workTodo3);

        var privateSet = new iqit.TodoSet({ id: "privateset", title: "Private" });
        var privateTodo1 = new iqit.Todo({ id: "private1", title: "Male huset" });
        var privateTodo2 = new iqit.Todo({ id: "private2", title: "Hente kaffemaskine" });
        privateSet.todos.push(privateTodo1, privateTodo2);

        return [workSet, privateSet];
    }
}