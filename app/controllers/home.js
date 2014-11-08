'use strict';

var jQuery = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var templates = require('../../dist/templates');
var _ = require('underscore');
Backbone.$ = jQuery;
var API_URL = 'http://localhost:9000/'

var HomeView = Backbone.View.extend({
  el: '#main',
  initialize: function() {
    this.render();
  },
  render: function() {
    var template = Handlebars.templates['index.tpl'];
    this.$el.html(template());
  }
});

module.exports = HomeView;