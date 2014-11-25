sinon = require('sinon')

beforeEach ->
  @sinon = sinon.sandbox.create()

afterEach ->
  @sinon.restore()

