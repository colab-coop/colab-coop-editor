/*global describe, it, beforeEach, afterEach, expect, Todo, TodoView, sinon */
'use strict';

describe('tests for the file listing', function () {
  var todoView;
  beforeEach(function() {
      var todo = new Todo();
      // Must set up localStorage for model
      todo.localStorage = new Store('ViewSpecs');

      $('body').append('<ul id="todoList"></ul>');
      todoView = new TodoView({ model: todo });
  });

  afterEach(function() {
      todoView.remove();
      $('#todoList').remove();
  });
});