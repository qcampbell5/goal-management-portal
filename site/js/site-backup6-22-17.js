// Slide Panels
$(document).ready(function() {

	// start workout panel loaded
	function  workoutPanel() {		
		if ($('.workout').css('width') == '250px') {
			// alert('yes');
			$('.movement-tile').fadeTo('slow', 1);
		}
	}// end workout panel loaded

	if ($(window).width() < 992) {
		if ($('a:contains("Daily To Do")').hasClass('active')){
			if ($('.daily-to-do').hasClass('slide-nav-vert')) {
				$(this).removeClass('slide-nav-vert');
				$(this).addClass('slide-nav-horiz', 500, function(){
					$('h2').addClass('visible', 100);
				});				
			} else {
				$('.daily-to-do').addClass('slide-nav-horiz', 500, function(){
					$('h2').addClass('visible', 100);	
				});				
			}		
		} else if ($('a:contains("Workout")').hasClass('active')) {
			if ($('.workout').hasClass('slide-nav-vert')) {
				$('.workout').removeClass('slide-nav-vert');
				$('.workout').addClass('slide-nav-horiz', 500, function(){
					$('.workout h2').addClass('visible', 100);	
				});
			} else {
				$('.workout').addClass('slide-nav-horiz', 500, function(){
					$('.workout h2').addClass('visible', 100);	
				});
			}	
		}
		$('.slide-nav').css('height', 0);
		// start daily to do panel slide
		if ($('a:contains("Daily To Do")').hasClass('active')){
			$('a:contains("Daily To Do")').ready(function() { 
			    $('.daily-to-do').animate({
			        height: 250,
			        opacity: 1
				}, {duration: 500, complete: function(){
					if($('.daily-to-do').css('width') == '250px') {
						$('.content-wrapper').css({'marginLeft': '250px'});			
					};				
					$('.daily-to-do h2').animate({
						height: 28,
						opacity: 1
					}, {duration: 100, complete: function(){
						$('.daily-to-do ul').animate({
							opacity: 1
						}, {duration: 100});
					}});
				}});
			}); 
		}// end daily to do panel slide

		// // start workout panel slide
		// else if ($('a:contains("Workout")').hasClass('active')){	
		// 	$('a:contains("Workout")').ready(function() {
		// 	    $('.workout').animate({
		// 	        height: 250,
		// 	        opacity: 1
		// 		}, {duration: 500, complete: function(){
		// 			if($('.workout').css('width') == '250px') {
		// 				$('.content-wrapper').css({'marginLeft': '250px'});
		// 				workoutPanel();						
		// 			};				
		// 			$('.workout h2').animate({
		// 				height: 28,
		// 				opacity: 1
		// 			}, {duration: 100, complete: function(){
		// 				$('.workout ul').animate({
		// 					opacity: 1
		// 				}, {duration: 100});
		
		// 			}});
		// 		}});
		// 	}); 

		// }// end workout panel slide
	}
	else if ($(window).width() > 992) {
		if ($('a:contains("Workout")').hasClass('active')){
			if ($('.workout').hasClass('slide-nav-vert')) {
				$('.workout').removeClass('slide-nav-vert');
				$('.workout').addClass('slide-nav-horiz', 500);
			} else {
				$('.workout').addClass('slide-nav-horiz', 500);
			}		
		};	
		// $('.slide-nav').css('width', '0px');
		// $('.slide-nav').css({'height':($('.main-nav').height()+'px')});
		// // start daily to do panel slide
		// if ($('a:contains("Daily To Do")').hasClass('active')){
		// 	$('a:contains("Daily To Do")').ready(function() { 
		// 	    $('.daily-to-do').animate({
		// 	        width: 250,
		// 	        opacity: 1
		// 		}, {duration: 500, complete: function(){
		// 			if($('.daily-to-do').css('width') == '250px') {
		// 				$('.content-wrapper').css({'marginLeft': '250px'});			
		// 			};				
		// 			$('.daily-to-do h2').animate({
		// 				height: 28,
		// 				opacity: 1
		// 			}, {duration: 100, complete: function(){
		// 				$('.daily-to-do ul').animate({
		// 					opacity: 1
		// 				}, {duration: 100});
		// 			}});
		// 		}});
		// 	}); 
		// }// end daily to do panel slide

		// // start workout panel slide
		// else if ($('a:contains("Workout")').hasClass('active')){	
		// 	$('a:contains("Workout")').ready(function() {
		// 	    $('.workout').animate({
		// 	        width: 250,
		// 	        opacity: 1
		// 		}, {duration: 500, complete: function(){
		// 			if($('.workout').css('width') == '250px') {
		// 				$('.content-wrapper').css({'marginLeft': '250px'});
		// 				workoutPanel();						
		// 			};				
		// 			$('.workout h2').animate({
		// 				height: 28,
		// 				opacity: 1
		// 			}, {duration: 100, complete: function(){
		// 				$('.workout ul').animate({
		// 					opacity: 1
		// 				}, {duration: 100});
		
		// 			}});
		// 		}});
		// 	}); 

		// }// end workout panel slide
	}



});