require 'angular'
require 'angular-route'
require 'angular-mocks'
sinon = require 'sinon'
#sinonAsPromised = require 'sinon-as-promised'

beforeEach ->
  console.log 1
  @sinon = sinon.sandbox.create()
  #angular.mock.inject ($injector) ->
    #$q = $injector.get('$q')
    #$rootScope = $injector.get('$rootScope')
    #sinonAsPromised($q)
    #sinonAsPromised.setScheduler (fn) ->
      #$rootScope.$evalAsync(fn)

afterEach ->
  @sinon.restore()

