/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../typings/lodash/lodash.d.ts"/>

import _  = require("lodash");

class TodoCtrl {
    public todos: ITodo[];
    public newTodoTitle: string;

    constructor() {
        this.todos = [];
    }

    public addTodo(): void {
        this.todos.push({
            title: this.newTodoTitle,
            done: false
        });
        this.newTodoTitle = "";
    }

    public removeTodo(todo: ITodo): void {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    public clearCompleted(): void {
        this.todos = _.reject(this.todos, "done");
    }
}
export = TodoCtrl;
