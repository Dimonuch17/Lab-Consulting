$(function () {
	// Pop-up window
	$('.btn').click(function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	});

	// Hamburger Menu
	$(".menu-open").click(function() {
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.nav__menu').toggleClass('menu-opened');
	});

	// Preloader
	var $preloader = $('#demo-content'),
	$spinner   = $preloader.find('.entry-header');
	$spinner.fadeOut();
	$preloader.delay(550).fadeOut('slow');

	// Animated 
	$(window).scroll(function() {

		$('.equip__picture').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+750) {
				$(this).addClass("bounceInLeft");
			}
		});

		$('.equip__picture_Right').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+750) {
				$(this).addClass("bounceInRight");
			}
		});

	});

	
// Slider
$('.navigation-slider').slick({
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
});
















});











