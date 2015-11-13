class AuthInterceptor {

    private $q: ng.IQService;

    constructor($q: ng.IQService) {
        this.$q = $q;
    }

    public request(config: ng.IRequestShortcutConfig): ng.IRequestShortcutConfig {
        // TODO get stored token
        var authToken: string = "eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE0MjI4MDQ0NTksInVzZXJuYW1lIjoiZGVtbyJ9.uirhaJxd4yVo6CtLwA23w9DlsrzgDS99YnWW5R9JbTQ";
        if(authToken) {
            config.headers["X-Auth-Token"] = authToken;
        }
        return config;
    }

    public responseError(error: any): ng.IPromise<void> {
        if(error.status == 401 || error.status == 403) {
            // TODO clear stored token
        }
        return this.$q.reject(error);
    }

}
AuthInterceptor.$inject = [
    "$q"
];
export = AuthInterceptor;