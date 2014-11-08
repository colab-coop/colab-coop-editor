var jQuery = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var templates = require('../../dist/templates');
Backbone.$ = jQuery;

var Folder = Backbone.Model.extend({});

module.exports = Folder;