require '../css/style.css'
require 'angular'
require 'angular-route'
todoAppModule = require './todo-sample/todo/todo-module'

requires = [
  todoAppModule.name
]

angular.module 'todo-sample-entry', requires
  .config ['$routeProvider', ($routeProvider) ->
    $routeProvider.otherwise redirectTo: "/"
  ]
  .config ['$locationProvider', ($locationProvider) ->
    $locationProvider.html5Mode(true)
  ]
