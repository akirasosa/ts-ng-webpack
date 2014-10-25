/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

import TodoCtrl = require("./todo-controller");

var requires: string[] = [
    "ngRoute",
    "templates"
];
var mod: ng.IModule = angular.module("todo-app", requires)
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider): ng.route.IRouteProvider => {
        return $routeProvider.when("/", {
            controller: "TodoCtrl",
            controllerAs: "todoCtrl",
            templateUrl: "todo/index.html"
        });
    }])
    .controller("TodoCtrl", TodoCtrl);

export = mod;
