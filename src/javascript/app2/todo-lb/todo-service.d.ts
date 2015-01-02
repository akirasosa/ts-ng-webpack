interface ITodoService {

    getTodos(page: number, size: number): ng.IPromise<IPage<ITodo>>;

}
