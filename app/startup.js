'use strict';

var jQuery = require('jquery');

jQuery.ajaxSetup({
  beforeSend: function (xhr) {
  	/*
    var token;
    xhr.setRequestHeader('Accept', 'application/json');

    token = localStorage.getItem('token');
    if (token) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    }*/

    return true;
  },
  xhrFields: {
      withCredentials: true
  },
  statusCode: {
  	//401: function() {
  		//window.location = '#/login';
  	//}
  }
});