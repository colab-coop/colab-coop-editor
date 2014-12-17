var jQuery = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var templates = require('../../dist/templates');
var config = require('../config');
Backbone.$ = jQuery;

var User = Backbone.Model.extend({
  url: function() {
    var id;
    id = this.get('id');
    if (id) {
      return config.API_URL + '/apis/users/' + id;
    }
    
    return config.API_URL + '/apis/users/current';
  },
  initialize: function(options) {
    if (options.id) {
      this.set('id', id);
    }
  },
  authenticate: function(options, cb) {
    var data;

    data = {
      username: options.username,
      password: options.password
    };

    jQuery.post(config.API_URL + '/apis/users/login', data)
    .success(function(response) {
      localStorage.setItem('token', response.token);
      cb(null);
    })
    .error(function(error) {
      cb(error);
    });
  },
  logout: function(options, cb) {
    jQuery.get(config.API_URL + '/apis/users/logout')
    .success(function(response) {
      localStorage.removeItem('token');
      cb(null);
    });
  },
  isAuthenticated: function(cb) {
    if (this.get('id')) {
      return true;
    }else{
      return false;
    }
  }
});

module.exports = User;