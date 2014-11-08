'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var config = require('../config');
var templates = require('../../dist/templates');
var Folder = require('../models/folder');
var File = require('../models/file');
var Folders = require('../collections/folders');
var Files = require('../collections/files');
var _ = require('underscore');
Backbone.$ = $;

var FileView = Backbone.View.extend({
	el: '#content',
	initialize:function(options) {
		this.folders = new Folders();
		this.files = new Files();

		if (options.url) {
			this.url = options.url
		}else{
			this.url = '';
		}

		this.render();
		this.renderFiles();
	},
	renderFiles:function() {
		var self = this;
		this.fetchFiles(function(err) {
			if (err) return false;

			var template = Handlebars.templates['row.tpl'];
			self.$el.find('#file-listing').html(
				template({folders: self.folders, files: self.files}));
		});
	},
	fetchFiles: function(callback) {
		var self = this;
		$.get(config.API_URL + '/directory/' + this.url)
		.success(function(data) {
			_.each(data, function(file, index) {
				//if (type === 'folder') {
				//	self.folders.add(file);
				//}else{
					var f = {
						filename: file,
						type: 'file',
						path: self.url
					};

					self.files.add(f);
				//}
			});

			callback(null, {});
		});
	},
	render: function() {
		var template = Handlebars.templates['index.tpl'];
		this.$el.html(template());
	}
});

module.exports = FileView;