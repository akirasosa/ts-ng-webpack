require '../css/style.css'
require 'angular'
require 'angular-route'
loginAppModule = require './jwt-sample/login-app/login-module'
secretAppModule = require './jwt-sample/secret-app/secret-module'

requires = [
  loginAppModule.name
  secretAppModule.name
]

angular.module 'jwt-sample-entry', requires
  .config ['$routeProvider', ($routeProvider) ->
    $routeProvider.otherwise redirectTo: "/"
  ]
  .config ['$locationProvider', ($locationProvider) ->
    $locationProvider.html5Mode(true)
  ]
