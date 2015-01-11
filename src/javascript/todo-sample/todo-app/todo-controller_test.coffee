require '../../test-helper'
assert = require "power-assert"
todoAppModule = require './todo-module'

describe 'TodoCtrl', ->
  self = undefined

  beforeEach ->
    self = @
    angular.mock.module todoAppModule.name
    angular.mock.inject ($injector) ->
      @todoResource = $injector.get('TodoService')
      @$controller = $injector.get('$controller')
      @$q = $injector.get('$q')
      @$rootScope = $injector.get('$rootScope')

  createController = ->
    self.$controller 'TodoCtrl',
      todoResource: self.todoResource

  fakeGetTodos = ->
    d = self.$q.defer()
    d.resolve [title: "test"]
    self.sinon.stub(self.todoResource, 'getTodos')
      .returns d.promise

  fakeAddTodo = ->
    d = self.$q.defer()
    d.resolve()
    self.sinon.stub(self.todoResource, 'addTodo')
      .returns d.promise

  fakeRemoveTodo = ->
    d = self.$q.defer()
    d.resolve()
    self.sinon.stub(self.todoResource, 'removeTodo')
      .returns d.promise

  fakeClearCompleted = ->
    d = self.$q.defer()
    d.resolve()
    self.sinon.stub(self.todoResource, 'clearCompleted')
      .returns d.promise

  describe '#initialization', ->
    it 'should fetch todos', ->
      fakeGetTodos()
      ctrl = createController()
      @$rootScope.$digest()
      assert ctrl.todos.length is 1
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
      @$rootScope.$digest()
      assert @addTodo.calledWith(@ctrl.newTodo) is true
    it 'should reset form', ->
      @ctrl.addTodo()
      @$rootScope.$digest()
      assert @ctrl.newTodo.title is ""
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
      @$rootScope.$digest()
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
    describe 'when there is no completed todos', ->
      it 'should do nothing', ->
        @ctrl.clearCompleted()
        @$rootScope.$digest()
        assert @clearCompleted.called is false
    describe 'when there are completed todos', ->
      beforeEach ->
        @ctrl.todos = [{done: true}, {done: false}]
      it 'should clear completed', ->
        @ctrl.clearCompleted()
        assert @clearCompleted.calledWith([done: true]) is true
      it 'should reload todo', ->
        spy = @sinon.stub(@ctrl, 'getTodos')
        @ctrl.clearCompleted()
        @$rootScope.$digest()
        assert spy.called is true

