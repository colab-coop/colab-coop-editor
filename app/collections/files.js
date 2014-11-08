var jQuery = require('jquery');
var Backbone = require('backbone');
var File = require('../models/file');
Backbone.$ = jQuery;

var Files = Backbone.Collection.extend({
	model: File
});

module.exports = Files;