<div>
	<div class="sidebar">
		<div id="save" class="save button--editor" data-tooltip="Save">
			<span class="icon-pencil"></span>
		</div>
		<div id="toggle-preview" class="button--editor active" data-tooltip="Toggle preview">
			<span class="icon-eye"></span>
		</div>
		<div id="toggle-editor" class="button--editor active" data-tooltip="Toggle editor">
			<span class="icon-code"></span>
		</div>
		<div id="delete" class="button--editor" data-tooltip="Delete">
			<span class="icon-remove2"></span>
		</div>
		<div id="back" class="button--editor" data-tooltip="Cancel">
			<span class="icon-close"></span>
		</div>
	</div>
	<div class="path">
		<p>Path: {{file_path path}}</p>
	</div>
	<textarea id="content">{{content}}</textarea>
  <div id="renderedMD"></div>
</div>
