interface ITodoService {

    getTodos(page: number, size: number): ng.IPromise<IPage<ITodo>>;
    addTodo(todo: ITodo): ng.IPromise<ITodo>;
    removeTodo(todo: ITodo): ng.IPromise<ITodo>;
    clearCompleted(todos: ITodo[]): ng.IPromise<ITodo>;

}
