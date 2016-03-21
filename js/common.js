$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.slider_wrap ul').bxSlider({
	    slideWidth: 333,
	    minSlides: 1,
	    maxSlides: 3,
	    slideMargin: 1
	});

	//menu
	$( ".menu_trigger" ).click(function() {
	  $( this ).next("ul").toggle( "slow");
	});
});