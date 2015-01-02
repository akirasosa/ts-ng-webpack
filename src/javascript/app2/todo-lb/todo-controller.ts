/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../../typings/lodash/lodash.d.ts"/>

class TodoCtrl {

    public todos: ITodo[] = [];
    public currentPage: number  = 1;
    public itemsPerPage: number = 5;
    public totalItems: number;
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
        this.todoService.getTodos(this.currentPage, this.itemsPerPage).then((page: IPage<ITodo>) => {
            this.totalItems = page.totalItems;
            this.itemsPerPage = page.itemsPerPage;
            this.todos = page.content;
        });
    }

}

TodoCtrl.$inject = [
    "TodoService"
];
export = TodoCtrl;
