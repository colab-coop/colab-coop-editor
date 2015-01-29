'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var templates = require('../../dist/templates');
var config = require('../config');
Backbone.$ = $;

function looksLikeScheme(code) {
    return !/^\s*\(\s*function\b/.test(code) && /^\s*[;\(]/.test(code);
}

var FileView = Backbone.View.extend({
  el: '#content',

  initialize: function(options) {
    this.url = options.url;
    this.fetchFile();
  },
  fetchFile: function() {
    var self = this;
    $.get(config.API_URL + '/getFile/' + this.url)
      .success(function(data) {
        self.content = data.content;
        self.render();
        self.renderMarkdown();
      });
  },
  back: function() {
    window.history.back();
  },
  render: function() {
    var template = Handlebars.templates['viewer.tpl'];
    this.$el.html(template({
      content: this.content,
      path: this.url
    }));
  }
});

module.exports = FileView;
