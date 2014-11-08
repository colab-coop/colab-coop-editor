'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var templates = require('../../dist/templates');
var config = require('../config');
Backbone.$ = $;

var FileView = Backbone.View.extend({
	el: '#content',
	events: {
		'click #save': 'save',
		'click #back': 'back'
	},
	initialize: function(options) {
		this.url = options.url;
		this.fetchFile();
	},
	fetchFile: function() {
		var self = this;
		$.get(config.API_URL + '/directory/' + this.url)
		.success(function(data) {
			self.content = data;
			self.render();
		});
	},
	save: function() {
		var content = this.$el.find('#content').val();
		$.post(config.API_URL + '/directory/' + this.url,
		 {content: content});
	},
	back: function() {
		window.history.back();
	},
	render: function() {
		var template = Handlebars.templates['editor.tpl'];
		this.$el.html(template({content: this.content}));
	}
});

module.exports = FileView;