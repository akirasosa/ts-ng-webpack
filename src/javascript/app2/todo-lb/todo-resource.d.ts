interface ITodoResource {
    getTodos(): ng.IPromise<ITodo[]>;
    addTodo(todo: ITodo): ng.IPromise<ITodo>;
    removeTodo(todo: ITodo): ng.IPromise<ITodo>;
    clearCompleted(todos: ITodo[]): ng.IPromise<void>;
}

