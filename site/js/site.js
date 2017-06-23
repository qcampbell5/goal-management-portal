// Slide Panels
$(document).ready(function() {

	// start workout panel loaded
	function  workoutPanel() {		
			$('.movement-tile').fadeTo('slow', 1);
	}// end workout panel loaded

	// start horizontal slide nav function
	function slideNavHoriz() {
		if ($('a:contains("Daily To Do")').hasClass('active')){
			if ($('.daily-to-do').hasClass('sn-v')) {
				$('.daily-to-do').css('width', '100%');
				$('.content-wrapper').addClass('cw-h', 500);
				$(this).removeClass('sn-v');
				$(this).addClass('sn-h', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});		
			} 
			else {
				$('.daily-to-do').css('width', '100%');				
				$('.content-wrapper').addClass('cw-h', 500);
				$('.daily-to-do').addClass('sn-h', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});		
			}	
		}
		else if ($('a:contains("Workout")').hasClass('active')){		
			if ($('.workout').hasClass('sn-v')) {
				$('.workout').css('width', '100%');
				$('.content-wrapper').addClass('cw-h', 500);
				$(this).removeClass('sn-v');
				$(this).addClass('sn-h', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});	
				workoutPanel();			
			} 
			else {
				$('.workout').css('width', '100%');
				$('.content-wrapper').addClass('cw-h', 500);
				$('.workout').addClass('sn-h', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
					workoutPanel();
				});				
			}	
		}	
	}// end horizontal slide nav function

	function slideNavVert() {
		if ($('a:contains("Daily To Do")').hasClass('active')){		
			if ($('.daily-to-do').hasClass('sn-h')) {
				$('.daily-to-do').css('height', '100%');
				$('.content-wrapper').addClass('cw-v', 500);
				$(this).removeClass('sn-h');
				$(this).addClass('sn-v', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});				
			} 
			else {
				$('.daily-to-do').css('height', '100%');
				$('.content-wrapper').addClass('cw-v', 500);
				$('.daily-to-do').addClass('sn-v', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});				
			}	
		}
		else if ($('a:contains("Workout")').hasClass('active')){		
			if ($('.workout').hasClass('sn-h')) {
				$('.workout').css('height', '100%');
				$('.content-wrapper').addClass('cw-v', 500);
				$(this).removeClass('sn-h');
				$(this).addClass('sn-v', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
				});	
				workoutPanel();			
			} 
			else {
				$('.workout').css('height', '100%');
				$('.content-wrapper').addClass('cw-v', 500);
				$('.workout').addClass('sn-v', 500, function(){
					$('h2').addClass('show-text', 200);
					$('ul').addClass('show-text', 500);
					
				});
				workoutPanel();			
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
			if ($('.daily-to-do').hasClass('sn-v') || $('.workout').hasClass('sn-v')) {
				$('.daily-to-do, .workout').removeClass('sn-v');
				$('.daily-to-do, .workout').addClass('sn-h');			
			} 		
		}
		else if ($(window).width() > 992) {
			if ($('.daily-to-do').hasClass('sn-h') || $('.workout').hasClass('sn-h')) {
				$('.daily-to-do, .workout').removeClass('sn-h');
				$('.daily-to-do, .workout').addClass('sn-v');			
			} 	
		} 
	})


});