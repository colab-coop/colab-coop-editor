'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var templates = require('../../dist/templates');
var config = require('../config');
var userModel = require('../models/user');
Backbone.$ = $;

var user;

var _UserView = Backbone.View.extend({
  el: '#content',
  events: {
  },
  initialize: function(options) {
    this.model = new userModel();
  },
  authenticate: function(options) {
    var self = this;
    this.model.authenticate(options, function(err) {
      if (err) {
        this.handleError(err);
        return false;
      }

      self.model.fetch();
    });
  },
  handleError: function(err) {
    console.log(err);
  }
});

function UserView(options) {
  if (!user) {
    user = new _UserView(options);
    return user;
  }else{
    return user;
  }
}

module.exports = UserView;