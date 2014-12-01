/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../../typings/lodash/lodash.d.ts"/>

import _  = require("lodash");

class TodoCtrl {
    private todoResource: ITodoResource;
    public todos: ITodo[] = [];
    public newTodo: ITodo;
    public todoForm: ng.IFormController;

    constructor(todoResource: ITodoResource) {
        this.todoResource = todoResource;
        this.init();
    }

    private init(): void {
        this.getTodos();
    }

    public getTodos():void {
        this.todoResource.getTodos().then((todos: ITodo[]) => {
           this.todos = todos;
        });

    }

    public addTodo(): void {
        this.todoResource.addTodo(this.newTodo).then(() => {
            this.newTodo.title = "";
            this.todoForm.$setPristine();
            this.getTodos();
        });
    }

    public removeTodo(todo: ITodo): void {
        this.todoResource.removeTodo(todo).then(() => {
            this.getTodos();
        })
    }

    public clearCompleted(): void {
        var completed: ITodo[] = _.filter(this.todos, "done");
        if (_.isEmpty(completed)) return;
        this.todoResource.clearCompleted(completed).then(() => {
            this.getTodos();
        });
    }
}
TodoCtrl.$inject = [
    "TodoResource"
]
export = TodoCtrl;
