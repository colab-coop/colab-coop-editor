var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['editor.tpl'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "<div>\n	<div class=\"sidebar\">\n		<div id=\"save\" class=\"save button--editor\" data-tooltip=\"Save\">\n			<span class=\"icon-pencil\"></span>\n		</div>\n		<div id=\"toggle-preview\" class=\"button--editor active\" data-tooltip=\"Toggle preview\">\n			<span class=\"icon-eye\"></span>\n		</div>\n		<div id=\"toggle-editor\" class=\"button--editor active\" data-tooltip=\"Toggle editor\">\n			<span class=\"icon-code\"></span>\n		</div>\n		<div id=\"delete\" class=\"button--editor\" data-tooltip=\"Delete\">\n			<span class=\"icon-remove2\"></span>\n		</div>\n		<div id=\"back\" class=\"button--editor\" data-tooltip=\"Cancel\">\n			<span class=\"icon-close\"></span>\n		</div>\n	</div>\n	<div class=\"path\">\n		<p>Path: "
    + escapeExpression(((helpers.file_path || (depth0 && depth0.file_path) || helperMissing).call(depth0, (depth0 != null ? depth0.path : depth0), {"name":"file_path","hash":{},"data":data})))
    + "</p>\n	</div>\n	<textarea id=\"content\">"
    + escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper)))
    + "</textarea>\n  <div id=\"renderedMD\"></div>\n</div>\n";
},"useData":true});
templates['index.tpl'] = template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	<div class=\"path\">\n		<p>Path: "
    + escapeExpression(((helpers.file_path || (depth0 && depth0.file_path) || helperMissing).call(depth0, (depth0 != null ? depth0.url : depth0), {"name":"file_path","hash":{},"data":data})))
    + "</p>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.url : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	<div class=\"sidebar\">\n		<div id=\"add\" class=\"button--editor\" data-tooltip=\"Add a new file\">\n			<span class=\"icon-plus\"></span>\n		</div>\n		<div id=\"upload\" class=\"button--editor\" data-tooltip=\"Upload a new file\">\n			<span class=\"icon-upload2\"></span>\n		</div>\n	</div>\n	<div id=\"file-listing\">\n	</div>\n</div>\n";
},"useData":true});
templates['login.tpl'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div>\n	<div>\n		Username:\n		<input type=\"text\" name=\"username\" id=\"username\"/> <br />\n		Password:\n     	<input type=\"password\" name=\"password\" id=\"password\"/> <br />\n     	<input type=\"submit\" name=\"sub\" value=\"Submit\" id=\"login\"/>\n	</div>\n</div>\n";
  },"useData":true});
templates['row.tpl'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.folder : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "			<div class=\"row\">\n				<a href=\"#/view";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.path : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "/"
    + escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"filename","hash":{},"data":data}) : helper)))
    + "\">\n					<span class=\"icon-folder\"></span>\n					"
    + escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"filename","hash":{},"data":data}) : helper)))
    + "\n					<div id=\"delete\">\n						<span class=\"icon-remove2\"></span>\n					</div>\n				</a>\n			</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "/"
    + escapeExpression(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"path","hash":{},"data":data}) : helper)));
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "			<div class=\"row\">\n				<a href=\"#/edit";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.path : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "/"
    + escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"filename","hash":{},"data":data}) : helper)))
    + "\">\n					<span class=\"icon-folder\"></span>\n					"
    + escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"filename","hash":{},"data":data}) : helper)))
    + "\n					<div id=\"delete\">\n						<span class=\"icon-remove2\"></span>\n					</div>\n				</a>\n			</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});

