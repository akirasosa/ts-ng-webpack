require '../../test-helper'
assert = require "power-assert"
todoAppModule = require './todo-module'

describe 'TodoCtrl', ->
  self = undefined

  beforeEach ->
    self = @
    angular.mock.module todoAppModule.name
    angular.mock.inject ($injector) ->
      @todoService = $injector.get('TodoService')
      @$controller = $injector.get('$controller')
      @$q = $injector.get('$q')
      @$rootScope = $injector.get('$rootScope')

  createController = ->
    self.$controller 'TodoCtrl',
      todoService: self.todoService

  fakeGetTodos = ->
    d = self.$q.defer()
    d.resolve
      totalItems: 1
      itemsPerPage: 2
      content: [title: "test"]
    self.sinon.stub(self.todoService, 'getTodos')
      .returns d.promise

  fakeAddTodo = ->
    d = self.$q.defer()
    d.resolve()
    self.sinon.stub(self.todoService, 'addTodo')
      .returns d.promise

  fakeRemoveTodo = ->
    d = self.$q.defer()
    d.resolve()
    self.sinon.stub(self.todoService, 'removeTodo')
      .returns d.promise

  fakeClearCompleted = ->
    d = self.$q.defer()
    d.resolve()
    self.sinon.stub(self.todoService, 'clearCompleted')
      .returns d.promise

  describe '#initialization', ->
    it 'should fetch todos', ->
      fakeGetTodos()
      ctrl = createController()
      @$rootScope.$digest()
      assert ctrl.todos.length is 1
      assert ctrl.totalItems is 1
      assert ctrl.itemsPerPage is 2
      assert.deepEqual ctrl.todos[0], {title: "test"}

  describe '#addTodo', ->
    beforeEach ->
      fakeGetTodos()
      @addTodo = fakeAddTodo()
      @ctrl = createController()
      @ctrl.newTodo = title: "test"
      @ctrl.todoForm = $setPristine: ->
      @$setPristine = @sinon.stub(@ctrl.todoForm, '$setPristine')
    it 'should add todo', ->
      @ctrl.addTodo()
      assert @addTodo.calledWith(@ctrl.newTodo) is true
    it 'should reset form', ->
      @ctrl.addTodo()
      @$rootScope.$digest()
      assert @ctrl.newTodo.title is undefined
      assert @$setPristine.called is true
    it 'should reload todo', ->
      spy = @sinon.stub(@ctrl, 'getTodos')
      @ctrl.addTodo()
      @$rootScope.$digest()
      assert spy.called is true

  describe '#removeTodo', ->
    beforeEach ->
      fakeGetTodos()
      @removeTodo = fakeRemoveTodo()
      @ctrl = createController()
    it 'should remove todo', ->
      @ctrl.removeTodo title: "remove me"
      assert @removeTodo.calledWith(title: "remove me") is true
    it 'should reload todo', ->
      spy = @sinon.stub(@ctrl, 'getTodos')
      @ctrl.removeTodo {}
      @$rootScope.$digest()
      assert spy.called is true

  describe '#clearCompleted', ->
    beforeEach ->
      fakeGetTodos()
      @clearCompleted = fakeClearCompleted()
      @ctrl = createController()
      @ctrl.todos = [{done: true}]
    it 'should clear completed', ->
      @ctrl.clearCompleted()
      assert @clearCompleted.calledWith([done: true]) is true
    it 'should reload todo', ->
      spy = @sinon.stub(@ctrl, 'getTodos')
      @ctrl.clearCompleted()
      @$rootScope.$digest()
      assert spy.called is true

