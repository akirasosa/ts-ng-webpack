///<reference path="todo-resource.d.ts"/>

class TodoService implements ITodoService {

    private $resource: ng.resource.IResourceService;

    constructor($resource: ng.resource.IResourceService) {
        this.$resource = $resource;
    }

    private resource(): ITodoResource {
        var baseApi: string = "/api/todos";
        var params: any = {id: "@id"};
        var queryAction: ng.resource.IActionDescriptor = {
            method: 'GET',
            isArray: true,
            transformResponse: (data) => {
                return angular.fromJson(data).content;
            }
        };

        return <ITodoResource>this.$resource(baseApi, params, {
            query: queryAction
        });
    }

    public getTodos(): Page<ITodo> {
        var totalItems :number = 0;
        var itemsPerPage :number = 20;
        var todos: ng.IPromise<ITodo[]>  = this.resource().query({}, (data, header) => {
            totalItems = header("X-Total-Items");
            itemsPerPage = header("X-Items-Per-Page");
        }).$promise;

        return {
            content: todos,
            totalItems: totalItems,
            itemsPerPage: itemsPerPage
        };
    }

}

TodoService.$inject = [
    "$resource"
];
export = TodoService;