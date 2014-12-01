/// <reference path="../../../../typings/lodash/lodash.d.ts"/>
/// <reference path="../../components/loopback/lb-services.d.ts"/>
/// <reference path="./todo-resource.d.ts"/>

class TodoResource implements ITodoResource {
    private Todo: lb.IResource<ITodo>;

    constructor(Todo: lb.IResource<ITodo>) {
        this.Todo = Todo;
    }

    public getTodos(): ng.IPromise<ITodo[]> {
        return this.Todo.find().$promise;
    }

    public addTodo(todo: ITodo): ng.IPromise<ITodo> {
        return this.Todo.create(todo).$promise;
    }

    public removeTodo(todo: ITodo): ng.IPromise<ITodo> {
        return this.Todo.deleteById(todo).$promise;
    }

    public clearCompleted(todos: ITodo[]): ng.IPromise<void> {
        var todoIds = _.pluck(todos, "id");
        return this.Todo
            .destroyAll({
                where: {
                    id: {
                        inq: todoIds
                    }
                }
            })
            .$promise;
    }
}
TodoResource.$inject =[
    "Todo"
];
export = TodoResource;

