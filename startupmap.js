function isIE() { return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))); }

function isEdge() { return (new RegExp('Edge').exec(navigator.userAgent) != null); }

$(document).ready(function() {
	setTimeout(function() {
		$('.welcome').toggleClass('visible');
	},500)
})

if ( isIE() || isEdge() ) {
	$('body').addClass('scroll-overflow');
	$('.framed').addClass('hide');
	$('.ie-text').addClass('display-text');
};

$('.open-about').click(function() {
	$('.about').toggleClass('about-active');
	$('.shadow-overlay').toggleClass('shadow-active');
})

$('.close-about').click(function() {
	$('.about').toggleClass('about-active');
	$('.shadow-overlay').toggleClass('shadow-active');
})

$('.shadow-overlay').click(function() {
	$('.about').toggleClass('about-active');
	$('.shadow-overlay').toggleClass('shadow-active');
})

$('.open-map').click(function() {
	$('.welcome').toggleClass('invisible');
	setTimeout(function() {
		$('.welcome').toggleClass('behind');
	}, 400);
	$('.open-about').toggleClass('visible');
})