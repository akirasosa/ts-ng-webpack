import SecretCtrl = require("./secret-controller");
import authModule = require("../components/auth/auth-module");

/* tslint:disable */
require("./index.html");
/* tslint:enable */

var requires: string[] = [
    "ngRoute",
    authModule.name
];
var mod: ng.IModule = angular.module("my-secret-app", requires)
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider): ng.route.IRouteProvider => {
        return $routeProvider.when("/", {
            controller: "SecretCtrl",
            controllerAs: "secretCtrl",
            templateUrl: "secret/index.html"
        });
    }])
    .controller("SecretCtrl", SecretCtrl);
export = mod;

