'use strict';

var loadButton = $('#loadButton');

loadButton.on('click', function() {
	$(this).prop('disabled',true);
	loadButton.html('LOADING...');
	setTimeout(function() {
		$(this).prop('disabled', false)
		loadButton.html('SUBMIT')
	}, 4000)
});