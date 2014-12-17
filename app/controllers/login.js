'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var templates = require('../../dist/templates');
var config = require('../config');
Backbone.$ = $;

var LoginView = Backbone.View.extend({
  el: '#content',
  events: {
    'click #login': 'login'
  },
  initialize: function(options) {
    this.render();
  },
  render: function() {
    var template = Handlebars.templates['login.tpl'];
    this.$el.html(template());
  },
  login: function(e) {
    var username, password;
    e.preventDefault();

    username = $('#username').val();
    password = $('#password').val();

    $.ajax({
      url: config.API_URL + '/getFile/',
      method: 'GET',
      username: username,
      password: password,
      xhrFields: {
        withCredentials: true
      },
      success: function() {
        window.location = '#/view/';
      }
    });
  }
});

module.exports = LoginView;
