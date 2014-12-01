require '../css/style.css'
require 'angular'
require 'angular-route'
require 'angular-resource'
todoAppModule = require './app2/todo-lb/todo-module'

requires = [
  todoAppModule.name
]

angular.module 'app2-entry', requires
  .config ['$routeProvider', ($routeProvider) ->
    $routeProvider.otherwise redirectTo: "/"
  ]
  .config ['$locationProvider', ($locationProvider) ->
    $locationProvider.html5Mode(true)
  ]
