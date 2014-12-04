require '../../test-helper'
assert = require "power-assert"
todoAppModule = require './todo-module'

describe 'TodoCtrl', ->
  self = undefined

  beforeEach ->
    self = @
    angular.mock.module todoAppModule.name
    angular.mock.inject ($injector) ->
      @todoResource = $injector.get('TodoResource')
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
      assert.ok @addTodo.calledWith @ctrl.newTodo
    it 'should reset form', ->
      @ctrl.addTodo()
      @$rootScope.$digest()
      assert @ctrl.newTodo.title is ""
      assert.ok @$setPristine.called
    it 'should reload todo', ->
      spy = @sinon.stub(@ctrl, 'getTodos')
      @ctrl.addTodo()
      @$rootScope.$digest()
      assert.ok spy.called

  describe '#removeTodo', ->
    beforeEach ->
      fakeGetTodos()
      @removeTodo = fakeRemoveTodo()
      @ctrl = createController()
    it 'should remove todo', ->
      @ctrl.removeTodo title: "remove me"
      @$rootScope.$digest()
      assert.ok @removeTodo.calledWith title: "remove me"
    it 'should reload todo', ->
      spy = @sinon.stub(@ctrl, 'getTodos')
      @ctrl.removeTodo {}
      @$rootScope.$digest()
      assert.ok spy.called

  #describe '#clearCompleted', ->
    #it 'should clear completed', ->
      #@controller.todos = [
        #done: true
      #,
        #done: false
      #]
      #@controller.clearCompleted()
      #assert @controller.todos[0].done is false
      #assert @controller.todos.length is 1

