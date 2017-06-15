// Slide Panels
$(document).ready(function() {


	$('a:contains("Daily To Do")').click(function() {
	    
	    $('.workout ul').animate({
	        opacity: 0
		}, {duration: 300, complete: function(){
			$('.workout h2').animate({
				height: 0,
				opacity: 1
			}, {duration: 200, complete: function(){
				$('.workout').animate({
					width: 0,
					opacity: 0
				});
			}});
		}});

	 //    $('.workout').animate({
	 //        width: 250,
	 //        marginRight: 0,
	 //        opacity: 1
		// }, {duration: 300, complete: function(){
		// 	$('.workout h2').animate({
		// 		height: 28,
		// 		opacity: 1
		// 	}, {duration: 200, complete: function(){
		// 		$('.workout ul').animate({
		// 			opacity: 1
		// 		}, {duration: 200});
		// 	}});
		// }});
	});

	$('a:contains("Workout")').click(function() {
	    $('.workout').animate({
	        width: 250,
	        opacity: 1
		}, {duration: 300, complete: function(){
			$('.workout h2').animate({
				height: 28,
				opacity: 1
			}, {duration: 200, complete: function(){
				$('.workout ul').animate({
					opacity: 1
				}, {duration: 200});
			}});
		}});
	});



});
