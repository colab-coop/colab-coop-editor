<div>
	{{#each data}}
		{{#if folder}}
			<div class="row">
				<span class="icon-folder"></span>
				<a href="#/view{{#if path}}/{{path}}{{/if}}/{{filename}}">{{filename}}</a>
			</div>
		{{else}}
			<div class="row"><a href="#/edit{{#if path}}/{{path}}{{/if}}/{{filename}}">{{filename}}</a></div>
		{{/if}}
	{{/each}}
</div>