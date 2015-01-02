/// <reference path="../../../../typings/node/node.d.ts" />
/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

import TodoCtrl = require("./todo-controller");
import TodoService = require("./todo-service");

/* tslint:disable */
require("angular-resource");
require("./index.html");
/* tslint:enable */

var requires: string[] = [
    "ngRoute",
    "ngResource"
];
var mod: ng.IModule = angular.module("app2.todo-lb-app", requires)
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider): ng.route.IRouteProvider => {
        return $routeProvider.when("/", {
            controller: "TodoCtrl",
            controllerAs: "todoCtrl",
            templateUrl: "todo-lb/index.html"
        });
    }])
    .controller("TodoCtrl", TodoCtrl)
    .service("TodoService", TodoService);
export = mod;

