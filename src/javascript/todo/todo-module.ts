/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />

import TodoCtrl = require("./todo-controller");
require("./index.html");

var requires: string[] = [
    "ngRoute"
];
var mod: ng.IModule = angular.module("todo-app", requires)
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider): ng.route.IRouteProvider => {
        return $routeProvider.when("/", {
            controller: "TodoCtrl",
            controllerAs: "todoCtrl",
            templateUrl: "javascript/todo/index.html"
        });
    }])
    .controller("TodoCtrl", TodoCtrl);

export = mod;
