'use strict';
var Handlebars = require('handlebars');

Handlebars.registerHelper('file_path', function(text) {
	var array, out, url;
	array = text.split('/');
	url = '';
	out = '<a href="#/view/">..</a> / ';

	for (var i=0; i<=array.length-1; i++) {
		url += array[i] + '/';

		if (i !== array.length-1) {
			out += '<a href="#/view/' + url + '">' + array[i] + '</a> / ';
		}else{
			out += '<span class="current">' + array[i] + '</span>';
		}
	}

	return new Handlebars.SafeString(out);

});
