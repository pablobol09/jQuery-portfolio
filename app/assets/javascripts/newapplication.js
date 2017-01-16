$(document).on('turbolinks:load',function(){
	$('img').hover(
		function() {
			$(this).addClass('active');
		},
		function() {
			$(this).removeClass('active');
		}

		);

});