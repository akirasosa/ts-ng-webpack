class TodoService implements ITodoService {

    private $resource: ng.resource.IResourceService;

    constructor($resource: ng.resource.IResourceService) {
        this.$resource = $resource;
    }

    private resource(): ITodoResource {
        var baseApi: string = "/api/todos";
        var params: any = {id: "@id"};
        var queryAction: ng.resource.IActionDescriptor = {
            method: "GET",
            isArray: true,
            transformResponse: (data: string) => {
                return angular.fromJson(data).content;
            }
        };

        return <ITodoResource>this.$resource(baseApi, params, {
            query: queryAction
        });
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
            }
        });

    }

}

TodoService.$inject = [
    "$resource"
];
export = TodoService;
