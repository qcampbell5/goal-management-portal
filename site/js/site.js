// Slide Panels
$(document).ready(function() {

	// start workout panel loaded
	function  actionTileFadeIn() {		
			$('.action-tile').fadeTo('slow', 1);
	}// end workout panel loaded

	// start horizontal slide nav function
	function slideNavHoriz() {
		if ($('a:contains("Daily To Do")').hasClass('active')){
			if ($('.daily-to-do').hasClass('sn-v')) {
				$(this).css('width', '100%');
				$(this).css('left', 0);				
				$('.content-wrapper').addClass('cw-h', 500);
				$(this).removeClass('sn-v');
				$(this).addClass('sn-h', 500, function(){
					$(this).children('h2').addClass('show-text', 200);
					$(this).children('ul').addClass('show-text', 500);
				});
				actionTileFadeIn();						
			} 
			else {
				$('.daily-to-do').css('width', '100%');	
				$('.daily-to-do').css('left', 0);								
				$('.content-wrapper').addClass('cw-h', 500);
				$('.daily-to-do').addClass('sn-h', 500, function(){
					$(this).children('h2').addClass('show-text', 200);
					$(this).children('ul').addClass('show-text', 500);
				});	
				actionTileFadeIn();					
			}	
		}
		else if ($('a:contains("Workout")').hasClass('active')){		
			if ($('.workout').hasClass('sn-v')) {
				$(this).css('width', '100%');
				$(this).css('left', 0);					
				$('.content-wrapper').addClass('cw-h', 500);
				$(this).removeClass('sn-v');
				$(this).addClass('sn-h', 500, function(){
					$(this).children('h2').addClass('show-text', 200);
					$(this).children('ul').addClass('show-text', 500);
				});	
				actionTileFadeIn();		
			} 
			else {
				$('.workout').css('width', '100%');
				$('.workout').css('left', 0);					
				$('.content-wrapper').addClass('cw-h', 500);
				$('.workout').addClass('sn-h', 500, function(){
					$(this).children('h2').addClass('show-text', 200);
					$(this).children('ul').addClass('show-text', 500);
				});				
				actionTileFadeIn();				
			}	
		}	
	}// end horizontal slide nav function

	// start vertical slide nav function
	function slideNavVert() {
		if ($('a:contains("Daily To Do")').hasClass('active')){		
			if ($('.daily-to-do').hasClass('sn-h')) {
				$(this).css('height', '100%');
				$(this).css('left', 100);				
				$('.content-wrapper').addClass('cw-v', 500);
				$(this).removeClass('sn-h');
				$(this).addClass('sn-v', 500, function(){
					$(this).children('h2').addClass('show-text', 200);
					$(this).children('ul').addClass('show-text', 500);
				});	
				actionTileFadeIn();							
			} 
			else {
				$('.daily-to-do').css('height', '100%');
				$('.daily-to-do').css('left', 100);					
				$('.content-wrapper').addClass('cw-v', 500);
				$('.daily-to-do').addClass('sn-v', 500, function(){
					$(this).children('h2').addClass('show-text', 200);
					$(this).children('ul').addClass('show-text', 500);
				});		
				actionTileFadeIn();						
			}	
		}
		else if ($('a:contains("Workout")').hasClass('active')){		
			if ($('.workout').hasClass('sn-h')) {
				$(this).css('height', '100%');
				$(this).css('left', 100);					
				$('.content-wrapper').addClass('cw-v', 500);
				$(this).removeClass('sn-h');
				$(this).addClass('sn-v', 500, function(){
					$(this).children('h2').addClass('show-text', 200);
					$(this).children('ul').addClass('show-text', 500);
				});	
				actionTileFadeIn();			
			} 
			else {
				$('.workout').css('height', '100%');
				$('.workout').css('left', 100);					
				$('.content-wrapper').addClass('cw-v', 500);
				$('.workout').addClass('sn-v', 500, function(){
					$(this).children('h2').addClass('show-text', 200);
					$(this).children('ul').addClass('show-text', 500);
					
				});
				actionTileFadeIn();			
			}	
		}	
	}// end vertical slide nav function

	if ($(window).width() < 992) {
		slideNavHoriz();		
	}
	else if ($(window).width() > 992) {
		slideNavVert();
	} 

	$(window).resize(function(){
		if ($(window).width() < 992) {
			$('.slide-nav').css('left', 0);			
			if ($('.daily-to-do').hasClass('sn-v') || $('.workout').hasClass('sn-v')) {
				$('.daily-to-do, .workout').removeClass('sn-v');
				$('.content-wrapper').removeClass('cw-v');	
				$('.content-wrapper').addClass('cw-h');										
				if ($('a:contains("Daily To Do")').hasClass('active')) {
					$('.daily-to-do').addClass('sn-h');
					$('.daily-to-do').css('width', '100%');
					$('.daily-to-do').css('height', '250px');					
				}
				else if ($('a:contains("Workout")').hasClass('active')) {
					$('.workout').addClass('sn-h');
					$('.workout').css('width', '100%');
					$('.workout').css('height', '250px');						
				}	
			} 		
		}
		else if ($(window).width() > 992) {
			$('.slide-nav').css('left', 100);				
			if ($('.daily-to-do').hasClass('sn-h') || $('.workout').hasClass('sn-h')) {			
				$('.daily-to-do, .workout').removeClass('sn-h');
				$('.content-wrapper').removeClass('cw-h');		
				$('.content-wrapper').addClass('cw-v');							
				if ($('a:contains("Daily To Do")').hasClass('active')) {
					$('.daily-to-do').addClass('sn-v');
					$('.daily-to-do').css('width', '250px');
					$('.daily-to-do').css('height', '100%');					
				}
				else if ($('a:contains("Workout")').hasClass('active')) {
					$('.workout').addClass('sn-v');
					$('.workout').css('width', '250px');
					$('.workout').css('height', '100%');						
				}						
			} 	
		} 
	})

});