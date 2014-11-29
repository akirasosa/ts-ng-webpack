/// <reference path="../../../../typings/node/node.d.ts" />
/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

import TodoCtrl = require("./todo-controller");
require("./index.html");

var requires: string[] = [
    "ngRoute"
];
var mod: ng.IModule = angular.module("app2.odo-lb-app", requires)
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider): ng.route.IRouteProvider => {
        return $routeProvider.when("/", {
            controller: "TodoCtrl",
            controllerAs: "todoCtrl",
            templateUrl: "todo-lb/index.html"
        });
    }])
    .controller("TodoCtrl", TodoCtrl);

export = mod;
