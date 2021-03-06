'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var templates = require('../../dist/templates');
var codemirror = require('codemirror');
var config = require('../config');
require('codemirror/mode/javascript/javascript.js');
Backbone.$ = $;

function looksLikeScheme(code) {
    return !/^\s*\(\s*function\b/.test(code) && /^\s*[;\(]/.test(code);
}

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
    $.get(config.API_URL + '/getFile/' + this.url)
      .success(function(data) {
        self.content = data.content;
        self.render();
      });
  },
  save: function() {
    var self = this;
    var content = this._codemirror.getValue();
    $.ajax({
      method: 'POST',
      url: config.API_URL + '/addFile',
      contentType: 'application/json',
      data: JSON.stringify({
        path: this.url,
        content: content,
        commitMsg: 'Added file'
      }),
      success: function(response) {
        self.$el.find('.save').find('span').addClass('icon-checkmark-circle');
        setTimeout(function() {
          self.$el.find('.save').find('span').removeClass('icon-checkmark-circle');
        }, 2000);
      }
    });
  },
  back: function() {
    window.history.back();
  },
  render: function() {
    var template = Handlebars.templates['editor.tpl'];
    this.$el.html(template({
      content: this.content,
      path: this.url
    }));

    this._codemirror = new codemirror
    .fromTextArea(this.$el.find('#content')[0], {
      mode: 'scheme',
      lineNumbers: true
    });

    this._codemirror.setOption('mode', 
      looksLikeScheme(this._codemirror.getValue()) ? 'scheme' : 'javascript');
  }
});

module.exports = FileView;