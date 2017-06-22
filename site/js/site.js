// Slide Panels
$(document).ready(function() {

	// start workout panel loaded
	function  workoutPanel() {		
			$('.movement-tile').fadeTo('slow', 1);
	}// end workout panel loaded

	// start horizontal slide nav function
	function slideNavHoriz() {
		if ($('a:contains("Daily To Do")').hasClass('active')){		
			if ($('.daily-to-do').hasClass('slide-nav-vert')) {
				$(this).removeClass('slide-nav-vert');
				$(this).addClass('slide-nav-horiz', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});				
			} 
			else {
				$('.daily-to-do').addClass('slide-nav-horiz', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});				
			}	
		}
		else if ($('a:contains("Workout")').hasClass('active')){		
			if ($('.workout').hasClass('slide-nav-vert')) {
				$(this).removeClass('slide-nav-vert');
				$(this).addClass('slide-nav-horiz', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});	
				workoutPanel();			
			} 
			else {
				$('.workout').addClass('slide-nav-horiz', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
					workoutPanel();
				});				
			}	
		}	
	}// end horizontal slide nav function
	function slideNavVert() {
		if ($('a:contains("Daily To Do")').hasClass('active')){		
			if ($('.daily-to-do').hasClass('slide-nav-horiz')) {
				$(this).removeClass('slide-nav-horiz');
				$(this).addClass('slide-nav-vert', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});				
			} 
			else {
				$('.daily-to-do').addClass('slide-nav-vert', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});				
			}	
		}
		else if ($('a:contains("Workout")').hasClass('active')){		
			if ($('.workout').hasClass('slide-nav-horiz')) {
				$(this).removeClass('slide-nav-horiz');
				$(this).addClass('slide-nav-vert', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});	
				workoutPanel();			
			} 
			else {
				$('.workout').addClass('slide-nav-vert', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
					workoutPanel();
				});				
			}	
		}	
	}

	if ($(window).width() < 992) {
		slideNavHoriz();		
	}
	else if ($(window).width() > 992) {
		slideNavVert();
	} 

	$(window).resize(function(){
		if ($(window).width() < 992) {
			if ($('.daily-to-do').hasClass('slide-nav-vert') || $('.workout').hasClass('slide-nav-vert')) {
				$('.daily-to-do, .workout').removeClass('slide-nav-vert');
				$('.daily-to-do, .workout').addClass('slide-nav-horiz');			
			} 		
		}
		else if ($(window).width() > 992) {
			if ($('.daily-to-do').hasClass('slide-nav-horiz') || $('.workout').hasClass('slide-nav-horiz')) {
				$('.daily-to-do, .workout').removeClass('slide-nav-horiz');
				$('.daily-to-do, .workout').addClass('slide-nav-vert');			
			} 	
		} 
	})


});