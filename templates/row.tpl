<div>
	{{#each data}}
		{{#if folder}}
			<div><a href="#/view{{#if path}}/{{path}}{{/if}}/{{filename}}">{{filename}}</a></div>
		{{else}}
			<div><a href="#/edit{{#if path}}/{{path}}{{/if}}/{{filename}}">{{filename}}</a></div>
		{{/if}}
	{{/each}}
</div>