/// <reference path="todoSet.js" />
/// <reference path="todo.js" />

var iqit = iqit || {};

iqit.TodoRepository = function () {
    this.dbName = "iqit.todoDB";
}

iqit.TodoRepository.prototype = {
    getAllSets: function () {
        var workSet = new iqit.TodoSet("workset");
        workSet.title = "Work";
        var workTodo1 = new iqit.Todo("worktodo1");
        workTodo1.title = "AMS pdf refactoring";
        workTodo1.comment = "- Lav setup med separat masterpage";
        var workTodo2 = new iqit.Todo("worktodo2");
        workTodo2.title = "Umbraco project setup";
        var workTodo3 = new iqit.Todo("worktodo3");
        workTodo3.title = "Umbraco on Azure Website";
        workSet.todos.push(workTodo1, workTodo2, workTodo3);

        var privateSet = new iqit.TodoSet("privateset");
        privateSet.title = "Private";
        var privateTodo1 = new iqit.Todo("private1");
        privateTodo1.title = "Male huset";
        var privateTodo2 = new iqit.Todo("private2");
        privateTodo2.title = "Hente kaffemaskine";
        privateSet.todos.push(privateTodo1, privateTodo2);

        return [workSet, privateSet];
        /*
        var result = new Array();
        result[workSet.Id] = workSet;
        result[privateSet.Id] = privateSet;
        return result;
        */
    }
}