#sinon = require("sinon")
assert = require "power-assert"

todoAppModule = require './todo-module'

describe 'TodoCtrl', ->
  beforeEach ->
    angular.mock.module todoAppModule.name
    angular.mock.inject ($injector) ->
      @controller = $injector.get('$controller') 'TodoCtrl'

  describe '#addTodo', ->
    beforeEach ->
      @controller.newTodoTitle = "test title"
      @controller.addTodo()
    it 'should add todo', ->
      assert.ok @controller.todos[0]
    it 'should clear new title', ->
      assert @controller.newTodoTitle is ""

  describe '#removeTodo', ->
    it 'should remove todo', ->
      @controller.todos = [
        title: "test todo"
      ]
      @controller.removeTodo(@controller.todos[0])
      assert @controller.todos.length is 0

  describe '#clearCompleted', ->
    it 'should clear completed', ->
      @controller.todos = [
        done: true
      ,
        done: false
      ]
      @controller.clearCompleted()
      assert @controller.todos[0].done is false
      assert @controller.todos.length is 1
