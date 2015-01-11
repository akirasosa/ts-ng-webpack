require '../../test-helper'
assert = require "power-assert"
todoAppModule = require './todo-module'

describe 'TodoService', ->
  beforeEach ->
    angular.mock.module todoAppModule.name
    angular.mock.inject ($injector) ->
      @todoResource = $injector.get('TodoService')
      @$rootScope = $injector.get('$rootScope')
      @$httpBackend = $injector.get('$httpBackend')

  describe '#getTodos', ->
    beforeEach ->
      @$httpBackend
        .expectGET '/api/todos'
        .respond content: [ title: "a" ]
    afterEach ->
      @$httpBackend.verifyNoOutstandingExpectation()
      @$httpBackend.verifyNoOutstandingRequest()
    it 'should fetch todos', ->
      result = undefined
      @todoResource.getTodos().then (todos) ->
        result = todos
      @$httpBackend.flush()
      assert.equal result.content[0].title, "a"

  describe '#addTodo', ->
    beforeEach ->
      @$httpBackend
        .expectPOST '/api/todos', title: "a"
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
        .expectDELETE '/api/todos/1'
        .respond()
    afterEach ->
      @$httpBackend.verifyNoOutstandingExpectation()
      @$httpBackend.verifyNoOutstandingRequest()
    it 'should remove todo', ->
      @todoResource.removeTodo id: 1
      @$httpBackend.flush()

  describe '#clearCompleted', ->
    beforeEach ->
      @$httpBackend
        .expectDELETE "/api/todos?ids=1&ids=2"
        .respond()
    afterEach ->
      @$httpBackend.verifyNoOutstandingExpectation()
      @$httpBackend.verifyNoOutstandingRequest()
    it 'should clear completed', ->
      @todoResource.clearCompleted [
        {id: 1, done: true},
        {id: 2, done: true},
        {id: 3, done: false},
      ]
      @$httpBackend.flush()

