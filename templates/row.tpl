<div>
	{{#each files.models}}
		{{#if attributes.path}}
			<div><a href="#/edit/{{attributes.path}}/{{attributes.filename}}">{{attributes.filename}}</a></div>
		{{else}}
			<div><a href="#/edit/{{attributes.filename}}">{{attributes.filename}}</a></div>
		{{/if}}
	{{/each}}
</div>