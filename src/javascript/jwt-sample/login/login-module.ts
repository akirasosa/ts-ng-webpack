import LoginCtrl = require("./login-controller");
import authModule = require("../components/auth/auth-module");

/* tslint:disable */
require("./index.html");
/* tslint:enable */

var requires: string[] = [
    "ngRoute",
    authModule.name
];
var mod: ng.IModule = angular.module("my-login-app", requires)
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider): ng.route.IRouteProvider => {
        return $routeProvider.when("/login", {
            controller: "LoginCtrl",
            controllerAs: "loginCtrl",
            templateUrl: "login/index.html"
        });
    }])
    .controller("LoginCtrl", LoginCtrl);
export = mod;

