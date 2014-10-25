# TypeScript + Angular + webpack Boilerplate

Basic setup for TypeScript, Angular, webpack, gulp and Bootstrap. Todos application is included in it.

## Description

### Development

* Typescript 1.1.0 by gulp-typescript
* Angular 1.3
* Stylus
* Bootstrap
* Jade
* CoffeeScript for test code and entry point.

### Build

* webpack
* gulp

### Testing

* karma
* mocha and chai
* istanbul for code coverage

![coverage](https://github.com/akirasosa/ts-ng-weback/wiki/images/coverage.jpg)

## Setup

```
npm install
bower install
tsd reinstall
gulp
open "http://localhost:8080/webpack-dev-server/"
```

Unit testing

```
./node_modules/karma/bin/karma start karma.conf.js
```

Production build

```
gulp build
```

## Credits

* [Backbone.js Todos](http://backbonejs.org/examples/todos/)
* [gulp-starter](https://github.com/greypants/gulp-starter)

