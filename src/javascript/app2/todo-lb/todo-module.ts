/// <reference path="../../../../typings/node/node.d.ts" />
/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

import TodoCtrl = require("./todo-controller");
import TodoResource = require("./todo-resource");

/* tslint:disable */
require("angular-resource");
require("../../components/loopback/lb-services");
require("./index.html");
/* tslint:enable */

var requires: string[] = [
    "ngRoute",
    "lbServices"
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
    .service("TodoResource", TodoResource);
export = mod;
