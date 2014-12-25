
$(function() {

if ($(window).width() < 650) {

	// remove blueprint team pictures
	$('.person img').remove();

	// slide menu
	$('head').append('<link rel="stylesheet" hrep="/css/snap.css">');
	$('#container').prepend('<div id="slidebutton"><i class="fa fa-bars"></i></div>');
	$('body').append('<script src="js/snap.min.js"></script>');
	$('body').append('<script>var snapper = new Snap({element: document.getElementById("container"), disable: "right", maxPosition: 175});document.getElementById("slidebutton").addEventListener("click", function(){if( snapper.state().state==="closed" ){ snapper.open("left"); } else {snapper.close();}});</script>');
}

});