<div>
	{{#each data}}
		{{#if folder}}
			<div class="row">
				<a href="#/view{{#if path}}/{{path}}{{/if}}/{{filename}}">
					<span class="icon-folder"></span>
					{{filename}}
					<!-- <div id="delete">
						<span class="icon-remove2"></span>
					</div> -->
				</a>
			</div>
		{{else}}
			<div class="row">
				{{#if editable}}
					<a href="#/edit{{#if path}}/{{path}}{{/if}}/{{filename}}">
						<span class="icon-file"></span>
				{{else}}
					<a href="#/view-binary{{#if path}}/{{path}}{{/if}}/{{filename}}">
						<span class="icon-image"></span>
				{{/if}}
					{{filename}}
					<!-- <div id="delete">
						<span class="icon-remove2"></span>
					</div> -->
				</a>
			</div>
		{{/if}}
	{{/each}}
</div>
