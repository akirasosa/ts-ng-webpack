interface ITodoService {

    getTodos(page: number = 0): Page<ITodo>;

}