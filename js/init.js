$(document).ready(function(){
    $(".button-collapse").sideNav();
    $("img:not(.carousel-image)").addClass("materialboxed");
    $(".materialboxed").materialbox();
    $('.carousel.carousel-slider').carousel({full_width: true});
	$(".dropdown-button").dropdown();
	$('ul.tabs').tabs();
	setTimeout(function() {
		$('.toc-wrapper').pushpin({
			top: $('header').height() + $('.head').outerHeight(),
	        bottom: $('footer').first().offset().top
		});
	}, 100);
});

var resize = function() {
	var targetWidth = ($(window).width() > 992 ? 3 : $(window).width() > 600 ? 2 : 1) * $('.images').children()[0].scrollWidth + 1;
	var height = 0;
	$(".card",$('.images')).each(function () {
	    if ($(this).outerHeight() > height) {
	        height = $(this).outerHeight();
	    }
	});
	$('.images').height(height);
	while($('.images')[0].scrollWidth > targetWidth) {
		$('.images').height($('.images').height() + 100);
	}
	$('.images').height($('.images').height() - 100);
	while($('.images')[0].scrollWidth > targetWidth) {
		$('.images').height($('.images').height() + 10);
	}
	$('.images').height($('.images').height() - 10);
	while($('.images')[0].scrollWidth > targetWidth) {
		$('.images').height($('.images').height() + 1);
	}
	$('.images').height(Math.max($('.images').height(), height));
};
var width = $(window).width();
window.onresize = function() {
	if (width != $(window).width())
		resize();
	width = $(window).width();
};
$(".images img").load(function() {
  resize();
});
resize();
