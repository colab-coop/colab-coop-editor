var jQuery = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var HomeView = require('./controllers/home');
var FileView = require('./controllers/file');
var EditView = require('./controllers/edit');
var LoginView = require('./controllers/login');
var Utils = require('./utils');
Backbone.$ = jQuery;
var startup = require('./startup');

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "login": "login",
    ":type(/)*path(/)": "file"
  },
  disposeView: function() {
    if (this.view) {
      this.view.undelegateEvents();
    }
  },
  index: function() {
    this.disposeView();
    window.location = '#/view';
  },
  file: function(type, path) {
    this.disposeView();
    if (type == 'edit') {
      this.view = new EditView({
        url: path
      });
    } else {
      this.view = new FileView({
        url: path
      });
    }
  },
  login: function() {
    this.disposeView();
    this.view = new LoginView();
  }

});

jQuery(document).ready(function() {
  new Router();
  Backbone.history.start()
});