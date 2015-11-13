/// <reference path="../../../../typings/node/node.d.ts" />
/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

import TodoCtrl = require("./todo-controller");
import TodoService = require("./todo-service");

/* tslint:disable */
require("angular-resource");
require("angular-bootstrap/ui-bootstrap");
require("angular-bootstrap/ui-bootstrap-tpls");
require("./index.html");
/* tslint:enable */

var requires: string[] = [
    "ngRoute",
    "ngResource",
    "ui.bootstrap"
];
var mod: ng.IModule = angular.module("todo-app", requires)
    .config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider): ng.route.IRouteProvider => {
        return $routeProvider.when("/", {
            controller: "TodoCtrl",
            controllerAs: "todoCtrl",
            templateUrl: "todo/index.html"
        });
    }])
    .controller("TodoCtrl", TodoCtrl)
    .service("TodoService", TodoService)
    ;
export = mod;

