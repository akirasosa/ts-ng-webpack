interface ITodoService {

    getTodos(page: number, size: number): ng.IPromise<IPage<ITodo>>;
    addTodo(todo: ITodo): ng.IPromise<ITodo>;

}
