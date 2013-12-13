jQuery(window).load(function() { 
	var vimeoPlayers = jQuery('.flexslider').find('iframe'), player; 		
	
	for (var i = 0, length = vimeoPlayers.length; i < length; i++) { 		    
			player = vimeoPlayers[i]; 		    
			$f(player).addEvent('ready', ready); 		
	} 		
	
	function addEvent(element, eventName, callback) { 	    	
		if (element.addEventListener) { 		    	
			element.addEventListener(eventName, callback, false) 		    
		} else { 	      		
			element.attachEvent(eventName, callback, false); 	      	
		} 	    
	} 	    
	
	function ready(player_id) { 	    	
		var froogaloop = $f(player_id); 	    	
		froogaloop.addEvent('play', function(data) { 		    	
			jQuery('.flexslider').flexslider("pause"); 		    
		}); 		    
		froogaloop.addEvent('pause', function(data) { 			    
			jQuery('.flexslider').flexslider("play"); 		    
		}); 		
	}  
	
	jQuery(".flexslider")     
	.flexslider({       
		animation: "slide",
		useCSS: false,       
		animationLoop: false,       
		smoothHeight: true,       
		before: function(slider){         
			if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0)
			      $f( slider.slides.eq(slider.currentSlide).find('iframe').attr('id') ).api('pause');       
		}   
	});

});