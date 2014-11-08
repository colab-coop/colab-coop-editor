'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var templates = require('../../dist/templates');
Backbone.$ = $;
var loader = null;

var _LoaderView = Backbone.View.extend({
	el: '#loading',
	initialize: function(options) {
	},
	show: function() {
		this.$el.show();
	},
	hide: function() {
		this.$el.hide();
	}
});

var LoaderView = function() {
	if (!loader) {
		loader = new _LoaderView();
		return loader;
	}else{
		return loader;
	}
}

module.exports = LoaderView;