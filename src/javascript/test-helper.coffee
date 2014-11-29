require 'angular'
require 'angular-route'
require 'angular-mocks'
sinon = require 'sinon'

beforeEach ->
  @sinon = sinon.sandbox.create()

afterEach ->
  @sinon.restore()

