/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight, ypos) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		var offetHie;
		var flag = true;
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
			offetHid = firstTop;
			
			firstTop = 0;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();
			
			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);
				var sod = Math.round((firstTop - pos) * speedFactor);
				var se = $('#second');
				var w = 150;
				if($this.attr('id')=='second')
				{
					//console.log((top-pos)+'&'+windowHeight);
					if( (top - pos)+(height/2) < windowHeight)
					{
						
						//if(flag!=false)
						//{
							//console.log((top-pos)+'&'+windowHeight);
							//blockSlide();
						//}
						//flag = false;
						
						$('.yp').stop(true,true).animate({top:se.height()/4,opacity:1},200);
						$('.shijue').stop(true,true).animate({left:(se.width()/2-150),opacity:1},200);
						$('.jiaohu').stop(true,true).animate({right:(se.width()/2-150),opacity:1},200);
						$('.sheji').stop(true,true).animate({bottom:'85',opacity:1},200);
					}else
					{
						$('.yp').stop(true,true).animate({top:0,opacity:0},200);
						$('.shijue').stop(true,true).animate({left:0,opacity:0},200);
						$('.jiaohu').stop(true,true).animate({right:0,opacity:0},200);
						$('.sheji').stop(true,true).animate({bottom:0,opacity:0},200);
					}
				}
				if($this.attr('id')=='f1')
				{
				
					var of = $('.dword').offset().top-pos;
					if(  (top - pos)<0 )
					{
						$('.dword').stop(true,true).animate({left:0,opacity:0},200);
					}else 
					{
						$('.dword').stop(true,true).animate({left:'-45%',opacity:1},200);
					}
				}
				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight ) {
					return;
				}
				
				if(!ypos)
				{
					if(Math.abs(sod)<=height*2-160)
					{
						$this.css('backgroundPosition', xpos + " " + sod  + "px");
					}
				}else
				{
					bgypos =Math.round(( ypos-pos ) * speedFactor)
					bgypos=bgypos>192?bgypos:192;
					$this.css('backgroundPosition', xpos + " " + bgypos + "px");
					
				}
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
