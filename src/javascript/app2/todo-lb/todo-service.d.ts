interface ITodoService {

    getTodos(page: number = 0): IPage<ITodo>;

}