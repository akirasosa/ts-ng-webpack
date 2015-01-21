import SecretCtrl = require("./secret-controller");

/* tslint:disable */
require("./index.html");
/* tslint:enable */

var requires: string[] = [
    "ngRoute"
];
var mod: ng.IModule = angular.module("secret-app", requires)
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider): ng.route.IRouteProvider => {
        return $routeProvider.when("/", {
            controller: "SecretCtrl",
            controllerAs: "secretCtrl",
            templateUrl: "secret-app/index.html"
        });
    }])
    .controller("SecretCtrl", SecretCtrl);
export = mod;

