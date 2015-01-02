/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../../typings/lodash/lodash.d.ts"/>

import _  = require("lodash");

class TodoCtrl {

    public todos: ITodo[] = [];
    public newTodo: ITodo;
    public todoForm: ng.IFormController;
    private todoService: ITodoService;

    constructor(todoService: ITodoService) {
        this.todoService = todoService;
        this.init();
    }

    private init(): void {
        this.getTodos();
    }

    public getTodos(): void {
        this.todoService.getTodos().content.then((todos: ITodo[]) => {
           this.todos = todos;
        });

    }

    //public addTodo(): void {
    //    this.todoResource.addTodo(this.newTodo).then(() => {
    //        this.newTodo.title = "";
    //        this.todoForm.$setPristine();
    //        this.getTodos();
    //    });
    //}
    //
    //public removeTodo(todo: ITodo): void {
    //    this.todoResource.removeTodo(todo).then(() => {
    //        this.getTodos();
    //    });
    //}
    //
    //public clearCompleted(): void {
    //    var completed: ITodo[] = _.filter(this.todos, "done");
    //    if (_.isEmpty(completed)) { return; }
    //    this.todoResource.clearCompleted(completed).then(() => {
    //        this.getTodos();
    //    });
    //}
}
TodoCtrl.$inject = [
    "TodoService"
];
export = TodoCtrl;
