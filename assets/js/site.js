function scrollElements()
{
	var h = $(window).height();
	var w = $(window).width();
	
	if(w <= 500)
	{
		var height  =  h <= 480 ? 480 : h;
	}
	else
	{
		var height  =  h < 750 ? 750 : h;
	}

	var ratio = 1200 / 1050;
	var margin_width = (w - (height * ratio))/2;
	var margin_height = (height - (w / ratio))*.5;
	var portrait_ratio = 1056 / 1735;
	
	var scrollTopVal = $(this).scrollTop() < 0 ? 0 : $(this).scrollTop();
	var portrait_margin_width = (w - (height * portrait_ratio)* (1 +(scrollTopVal/height)))/2;
	
	
	
	$('.box1').css('width',(height * portrait_ratio)* (1 +(scrollTopVal/height))+'px');
	$('.box1').css('height',height* (1 +(scrollTopVal/height))+'px');
	$('.box1').css('margin-left',portrait_margin_width - (w/2) + (scrollTopVal/height) * (w/2) + 'px');
	$('.box1').css('margin-top',(scrollTopVal/height) * -100 + 'px');
	
	$('.danContainer').css('width',(height * portrait_ratio)* (1 +(scrollTopVal/height))+'px');
	$('.danContainer').css('height',height* (1 +(scrollTopVal/height))+'px');
	$('.danContainer').css('margin-left',portrait_margin_width- (scrollTopVal/height) * (w/2)+'px');
	$('.danContainer').css('margin-top',(scrollTopVal/height) * -100 + 'px');
	
	$('.danEyesContainer').css('width',(height * portrait_ratio) * .1799 * (1 +(scrollTopVal/height))+'px');
	$('.danEyesContainer').css('height',height* .03456 * (1 +(scrollTopVal/height))+'px');
	
	$('.johnEyesContainer').css('width',(height * portrait_ratio) * .1799 * (1 +(scrollTopVal/height))+'px');
	$('.johnEyesContainer').css('height',height* .03456 * (1 +(scrollTopVal/height))+'px');
	//$('.danEyesContainer').css('-webkit-transform', 'scale(' + Math.round((height * portrait_ratio)* (1 +(scrollTopVal/height)) / 1056 * 100) / 100 + ')');
	
	
	if(scrollTopVal > $('#cover').height() + $('#about').height() && w > 568)
	{
		//clip: rect(auto 535px auto auto);
		$('.coverLeft').css('clip','rect(auto '+w*1.5+'px auto auto)');
		//$('.coverLeft').css('width','150%');
		//$('.coverLeft').css('height',$('#work').height() - (scrollTopVal - $('#cover').height() - $('#about').height()) + 'px');
		//$('.coverRight').css('background-color','#7f8085');
		//$('.coverLeft').css('background-color','#c9ccc3');
	}
	else if(scrollTopVal > $('#cover').height())
	{
		$('.coverLeft').css('clip','rect(auto '+(w/2 + w * ((scrollTopVal-$('#cover').height())/$('#cover').height()))+'px auto auto)');
		//$('.coverLeft').css('width',w/2 + w * ((scrollTopVal-$('#cover').height())/$('#cover').height()) +'px');
		//$('.coverLeft').css('height','100%');
		//$('.coverRight').css('background-color','#c2c6c7');
		//$('.coverLeft').css('background-color','#a1ada1');
	}
	else
	{
		//$('.coverLeft').css('width','50%');
		$('.coverLeft').css('clip','rect(auto '+w/2+'px auto auto)');
		//$('.coverLeft').css('height','100%');
		//$('.coverRight').css('background-color','#c2c6c7');
		//$('.coverLeft').css('background-color','#a1ada1');
	}
	
	if(w > 749)
	{
		//$('.backgroundContainer').css('margin-top',-scrollTopVal/height*60 + scrollTopVal + 'px');
		//$('.backgroundContainerRight').css('margin-top',-scrollTopVal/height*60 + scrollTopVal  + 'px');
		
		$('.backgroundContainer').css('transform','matrix(1, 0, 0, 1, 0, '+(-scrollTopVal/height*60) + ')');
		$('.backgroundContainerRight').css('transform','matrix(1, 0, 0, 1, 0, '+(-scrollTopVal/height*60) + ')');
	}
	
	if(w > 749)
	{
		if(!animating)
		{
				$('.down a').removeClass("active");
		}
	
		if (!animating && scrollTopVal >= $('#cover').height() + $('#about').height() + $('#work').height()  + $('#contact').height())
		{
			$('.down a[href="#contact"]').addClass('active');
		} 
		else if (!animating && scrollTopVal >= $('#cover').height() + $('#about').height() + $('#work').height())
		{
			$('.down a[href="#notes"]').addClass('active');
		} 
		else if (!animating && scrollTopVal >= $('#cover').height() + $('#about').height())
		{
			$('.down a[href="#work"]').addClass('active');
		}
		else if (!animating && scrollTopVal >= $('#cover').height() )
		{
			$('.down a[href="#about"]').addClass('active');
		}
		else if(!animating)
		{
			$('.down a[href="#cover"]').addClass('active');
		}
	}
}

function resizeElements()
{
	var h = $(window).height();
	var actualH = h;
	var w = $(window).width();
	if(w <= 500)
	{
		var height  =  h <= 320 ? 320 : h;
	}
	else
	{
		var height  =  h < 750 ? 750 : h;
	}

	var ratio = 1200 / 1050;
	var margin_width = (w - (height * ratio))/2;
	var margin_height = (height - (w / ratio))*.5;
	var portrait_ratio = 1056 / 1735;
	
	$('section').css('min-height',height);
	$('.covers').css('height',$('#cover').height() + $('#about').height() + $('#work').height() + $('#notes').height()+'px');
	//$('.covers').css('width',w+'px');
	$('.coverLeft').css('height',$('#cover').height() + $('#about').height() + $('#work').height()+'px');
	$('.coverRight').css('height',$('#cover').height() + $('#about').height() + $('#work').height() + $('#notes').height()+'px');
	
	var averageHeight = ($('#cover').height() + $('#about').height() + $('#work').height() + $('#notes').height()) / 4;
	if((w / actualH < ratio))
	{
		$('.backgroundContainer').css('width',((h+60*4) * ratio)+'px');
		$('.backgroundContainer').css('height',h+60*4+'px');
		
		$('.backgroundContainerRight').css('width',((h+60*4) * ratio)+'px');
		$('.backgroundContainerRight').css('height',h+60*4+'px');
		
		
	}
	else
	{
		$('.backgroundContainer').css('width',w + (60*4) * ratio+'px');
		$('.backgroundContainer').css('height',(w / ratio) +60*4+ 'px');

		$('.backgroundContainerRight').css('width',w + (60*4) * ratio+'px');
		$('.backgroundContainerRight').css('height',(w / ratio) +60*4+ 'px');
		
		
	}
}

var lastAction = ''; 
var animating = false; 
var navShown = false;
$(document).ready(function()
{
	var h = $(window).height();
	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}    
	});
	$(".down a").click(function(event) {
		event.preventDefault();
		animating = true;
		
		$('.down a').removeClass("active");
		$(this).addClass('active');
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		if(target == "#contact")
		{
			$(scrollElement).stop().animate({
				'scrollTop': $target.offset().top-h+$target.height()
			}, 500, 'swing', function() {animating = false;});
		}
		else
		{
			
			$(scrollElement).stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function() {animating = false;});
		}
		
	});
	$(".mobileNav").click(function(event) {
		event.preventDefault();
		if(!navShown)
		{
			$(this).addClass('active');
			$(".navOverlay").addClass('shown');
			navShown = true;
		}
		else if(navShown)
		{
			$(this).removeClass('active');
			$(".navOverlay").removeClass('shown');
			navShown = false;
		}
	});
	
	$(".navItem a").click(function(event) {
		event.preventDefault();
		animating = true;
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		if(target == "#contact")
		{
			$(scrollElement).stop().animate({
				'scrollTop': $target.offset().top-h+$target.height()
			}, 500, 'swing', function() {animating = false;});
		}
		else
		{
			
			$(scrollElement).stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function() {animating = false;});
		}
		
		$(".mobileNav").removeClass('active');
			$(".navOverlay").removeClass('shown');
			navShown = false;
	});
	
	$(".downCenter a").click(function(event) {
		event.preventDefault();
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		if(target == "#contact")
		{
			$(scrollElement).stop().animate({
				'scrollTop': $target.offset().top-h+$target.height()
			}, 500, 'swing', function() {});
		}
		else
		{
			
			$(scrollElement).stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function() {});
		}
		
	});
	
	$(window).resize(function(e)
	{
		resizeElements();
		scrollElements();
	});
	resizeElements();
	scrollElements();
	$(window).scroll(function()
	{
		scrollElements();
	});
	$(window).on("touchstart", function(ev) {
    	scrollElements();
	});
	$(window).on("touchmove", function(ev) {
    	scrollElements();
	});
	$(window).on("touchend", function(ev) {
    	scrollElements();
	});
	
});