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

function toggleFullScreen() {
	if ((document.fullScreenElement && document.fullScreenElement !== null) ||
		(!document.mozFullScreen && !document.webkitIsFullScreen)) {
		if (document.documentElement.requestFullScreen) {
			document.documentElement.requestFullScreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullScreen) {
			document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
}

var updateFullScreen = function() {
	if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
		// Currently fullscreen
        $('.interactive').addClass('fullscreen');
    } else {
    	// Currently not fullscreen
    	$('.interactive').removeClass('fullscreen');
    }
};

if (document.addEventListener) {
	document.addEventListener('webkitfullscreenchange', updateFullScreen, false);
    document.addEventListener('mozfullscreenchange', updateFullScreen, false);
    document.addEventListener('fullscreenchange', updateFullScreen, false);
    document.addEventListener('MSFullscreenChange', updateFullScreen, false);
}

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
