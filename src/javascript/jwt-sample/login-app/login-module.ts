import LoginCtrl = require("./login-controller");

/* tslint:disable */
require("./index.html");
/* tslint:enable */

var requires: string[] = [
    "ngRoute"
];
var mod: ng.IModule = angular.module("login-app", requires)
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider): ng.route.IRouteProvider => {
        return $routeProvider.when("/login", {
            controller: "LoginCtrl",
            controllerAs: "loginCtrl",
            templateUrl: "login-app/index.html"
        });
    }])
    .controller("LoginCtrl", LoginCtrl);
export = mod;

