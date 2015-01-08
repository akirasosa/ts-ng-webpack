import _  = require("lodash");

class TodoService implements ITodoService {
    private $resource: ng.resource.IResourceService;

    constructor($resource: ng.resource.IResourceService) {
        this.$resource = $resource;
    }

    public getTodos(page: number, size: number): ng.IPromise<IPage<ITodo>> {
        var totalItems: number = undefined;
        var itemsPerPage: number = undefined;

        return this.resource().query({page: page, size: size}, (data, header) => {
            totalItems = header("X-Total-Items");
            itemsPerPage = header("X-Items-Per-Page");
        }).$promise.then((todos: ITodo[]) => {
            return {
                content: todos,
                totalItems: totalItems,
                itemsPerPage: itemsPerPage
            };
        });
    }

    public addTodo(todo: ITodo): ng.IPromise<ITodo> {
        return this.resource().save(todo).$promise;
    }

    public removeTodo(todo: ITodo): ng.IPromise<ITodo> {
        return this.resource().delete({id: todo.id}).$promise;
    }

    public removeCompleted(todos: ITodo[]): ng.IPromise<any> {
        var completedIds: number[] = _.chain(todos)
            .filter("done")
            .pluck<number>("id")
            .value();
        return this.resource().delete({ids: completedIds}).$promise;
    }

    private resource(): ITodoResource {
        var baseApi: string = "/api/todos/:id";
        var params: any = {id: "@id"};
        var queryAction: ng.resource.IActionDescriptor = {
            method: "GET",
            isArray: true,
            transformResponse: (data: string) => {
                return angular.fromJson(data).content;
            }
        };

        return <ITodoResource> this.$resource(baseApi, params, {
            query: queryAction
        });
    }


}

TodoService.$inject = [
    "$resource"
];
export = TodoService;
