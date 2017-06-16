// Slide Panels



$('.slide-nav').css({'height':($('.main-nav').height()+'px')});

if($('.workout').css('width') == '250px') {
	$('.content-wrapper').css({'marginLeft': '250px'});
};


$(document).ready(function() {

	if ($('a:contains("Daily To Do")').hasClass('active')){
		$('a:contains("Daily To Do")').ready(function() { 
		    $('.daily-to-do').animate({
		        width: 250,
		        opacity: 1
			}, {duration: 500, complete: function(){
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
	}// end Daily To Do panel slide
	else if ($('a:contains("Workout")').hasClass('active')){	
		$('a:contains("Workout")').ready(function() {
		    $('.workout').animate({
		        width: 250,
		        opacity: 1
			}, {duration: 500, complete: function(){
				$('.workout h2').animate({
					height: 28,
					opacity: 1
				}, {duration: 100, complete: function(){
					$('.workout ul').animate({
						opacity: 1
					}, {duration: 100});
				}});
			}});
		}); 
	}// end Workout panel slide
	else {}
});