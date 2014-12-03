/// <reference path="../../../../typings/node/node.d.ts" />
/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

import TodoCtrl = require("./todo-controller");

/* tslint:disable */
require("./index.html");
/* tslint:enable */

var requires: string[] = [
    "ngRoute"
];
var mod: ng.IModule = angular.module("app1.todo-app", requires)
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider): ng.route.IRouteProvider => {
        return $routeProvider.when("/", {
            controller: "TodoCtrl",
            controllerAs: "todoCtrl",
            templateUrl: "todo/index.html"
        });
    }])
    .controller("TodoCtrl", TodoCtrl);

export = mod;
