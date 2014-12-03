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
      @controller = $injector.get('$controller')

  createController = ->
    self.controller 'TodoCtrl',
      todoResource: @todoResource

  describe '#initialization', ->
    it 'should fetch todos', ->
      #spy = @sinon.stub(@todoResource, 'getTodos').resolves [{}]
      ctrl = createController()
      #assert.ok spy.calledOnce
      assert ctrl.todos.length is 10


  #describe '#addTodo', ->
    #beforeEach ->
      #@controller.newTodoTitle = "test title"
      #@controller.addTodo()
    #it 'should add todo', ->
      #assert.ok @controller.todos[0]
    #it 'should clear new title', ->
      #assert @controller.newTodoTitle is ""

  #describe '#removeTodo', ->
    #it 'should remove todo', ->
      #@controller.todos = [
        #title: "test todo"
      #]
      #@controller.removeTodo(@controller.todos[0])
      #assert @controller.todos.length is 0

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

