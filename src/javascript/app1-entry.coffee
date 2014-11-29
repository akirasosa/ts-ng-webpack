require '../css/style.css'
require 'angular'
require 'angular-route'
todoAppModule = require './app1/todo/todo-module'

requires = [
  todoAppModule.name
]

angular.module 'app1-entry', requires
  .config ['$routeProvider', ($routeProvider) ->
    $routeProvider.otherwise redirectTo: "/"
  ]
  .config ['$locationProvider', ($locationProvider) ->
    $locationProvider.html5Mode(true)
  ]
