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
      expect(@controller.todos[0]).to.be
    it 'should clear new title', ->
      expect(@controller.newTodoTitle).to.be.empty

  describe '#removeTodo', ->
    it 'should remove todo', ->
      @controller.todos = [
        title: "test todo"
      ]
      @controller.removeTodo(@controller.todos[0])
      expect(@controller.todos).to.be.empty

  describe '#clearCompleted', ->
    it 'should clear completed', ->
      @controller.todos = [
        done: true
      ,
        done: false
      ]
      @controller.clearCompleted()
      expect(@controller.todos[0].done).to.be.false
      expect(@controller.todos.length).to.equal 1
