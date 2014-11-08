var jQuery = require('jquery');
var Backbone = require('backbone');
var Folder = require('../models/folder');
Backbone.$ = jQuery;

var Folders = Backbone.Model.extend({
  Model: File
});

module.exports = Folders;