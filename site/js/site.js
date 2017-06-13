$(document).ready(function() {
	$('a.workout').click(function() {
	  $('.slide-nav.workout').animate( {
	    left: "+=250",
	  }, 300, function() {
	    
	  });
	});
});
