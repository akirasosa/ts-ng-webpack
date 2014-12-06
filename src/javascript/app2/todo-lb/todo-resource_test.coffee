require '../../test-helper'
assert = require "power-assert"
todoAppModule = require './todo-module'

describe 'TodoResource', ->
  beforeEach ->
    angular.mock.module todoAppModule.name
    angular.mock.inject ($injector) ->
      @todoResource = $injector.get('TodoResource')
      @$rootScope = $injector.get('$rootScope')
      @$httpBackend = $injector.get('$httpBackend')

  describe '#getTodos', ->
    beforeEach ->
      @$httpBackend
        .expectGET '/api/Todos'
        .respond [ title: "a" ]
    afterEach ->
      @$httpBackend.verifyNoOutstandingExpectation()
      @$httpBackend.verifyNoOutstandingRequest()
    it 'should fetch todos', ->
      result = undefined
      @todoResource.getTodos().then (todos) ->
        result = todos
      @$httpBackend.flush()
      assert.equal result[0].title, "a"

  describe '#addTodo', ->
    beforeEach ->
      @$httpBackend
        .expectPOST '/api/Todos', title: "a"
        .respond()
    afterEach ->
      @$httpBackend.verifyNoOutstandingExpectation()
      @$httpBackend.verifyNoOutstandingRequest()
    it 'should add todo', ->
      @todoResource.addTodo title: "a"
      @$httpBackend.flush()

  describe '#removeTodo', ->
    beforeEach ->
      @$httpBackend
        .expectDELETE '/api/Todos/1'
        .respond()
    afterEach ->
      @$httpBackend.verifyNoOutstandingExpectation()
      @$httpBackend.verifyNoOutstandingRequest()
    it 'should remove todo', ->
      @todoResource.removeTodo id: 1
      @$httpBackend.flush()

  describe '#clearCompleted', ->
    beforeEach ->
      q = '{"id":{"inq":[1]}}'
      @$httpBackend
        .expectDELETE "/api/Todos?where=#{encodeURI(q)}"
        .respond()
    afterEach ->
      @$httpBackend.verifyNoOutstandingExpectation()
      @$httpBackend.verifyNoOutstandingRequest()
    it 'should clear completed', ->
      @todoResource.clearCompleted [ id: 1, title: "a" ]
      @$httpBackend.flush()

