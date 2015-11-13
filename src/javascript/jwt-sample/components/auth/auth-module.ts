import AuthInterceptor = require("./auth-interceptor");

var requires: string[] = [
];

var mod: ng.IModule = angular.module("my-auth", requires)
    .config(["$httpProvider", ($httpProvider: ng.IHttpProvider) => {
        $httpProvider.interceptors.push("AuthInterceptor");
    }])
    .service("AuthInterceptor", AuthInterceptor)
    ;
export = mod;
