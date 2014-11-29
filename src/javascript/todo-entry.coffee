require '../css/style.css'
require 'angular'
require 'angular-route'
todoAppModule = require './todo/todo-module'

requires = [
  todoAppModule.name
]

angular.module 'todo-entry', requires
  .config ['$routeProvider', ($routeProvider) ->
    $routeProvider.otherwise redirectTo: "/"
  ]
  .config ['$locationProvider', ($locationProvider) ->
    $locationProvider.html5Mode(true)
  ]
