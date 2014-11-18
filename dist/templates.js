var Handlebars = require("Handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['editor.tpl'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "<div>\n	<div class=\"sidebar\">\n		<div class=\"save\" id=\"save\">\n			<span class=\"icon-pencil\"></span>\n		</div>\n	</div>\n	<div class=\"path\">Path: "
    + escapeExpression(((helpers.file_path || (depth0 && depth0.file_path) || helperMissing).call(depth0, (depth0 != null ? depth0.path : depth0), {"name":"file_path","hash":{},"data":data})))
    + "</div>\n	<br />\n	<textarea id=\"content\">"
    + escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper)))
    + "</textarea>\n	<br />\n	<div id=\"back\">Go back</div>\n</div>";
},"useData":true});
templates['index.tpl'] = template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		Path: /"
    + escapeExpression(((helpers.file_path || (depth0 && depth0.file_path) || helperMissing).call(depth0, (depth0 != null ? depth0.url : depth0), {"name":"file_path","hash":{},"data":data})))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div>\n	<h2>Explore the project:</h2>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.url : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	<div id=\"file-listing\">\n	</div>\n</div>";
},"useData":true});
templates['row.tpl'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.folder : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "			<div class=\"row\">\n				<span class=\"icon-folder\"></span>\n				<a href=\"#/view";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.path : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "/"
    + escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"filename","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"filename","hash":{},"data":data}) : helper)))
    + "</a>\n			</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "/"
    + escapeExpression(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"path","hash":{},"data":data}) : helper)));
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "			<div class=\"row\"><a href=\"#/edit";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.path : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "/"
    + escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"filename","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"filename","hash":{},"data":data}) : helper)))
    + "</a></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});

