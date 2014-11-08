var jQuery = require('jquery');
var Backbone = require('backbone');
var Folder = require('../models/folder');
Backbone.$ = jQuery;

var Folders = Backbone.Collection.extend({
  Model: File
});

module.exports = Folders;