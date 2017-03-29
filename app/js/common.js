new WOW().init();
var $ = jQuery;

$(function() {
	var scrollTop = window.pageYOffset ||
	document.documentElement.scrollTop ||
	document.body.scrollTop;
	window.onscroll = function(){
		var scrollTop = window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop;
		function scroll(){
			if(scrollTop < 84){
				$('.burger').css({top: 90 - scrollTop + 'px'});
				$('.burger.is-open').css({top: 150 - scrollTop + 'px !important'});
				$('.nav').css({top: 85 - scrollTop + 'px'})
				$('.nav').removeClass('sticky');
				$('.burger').removeClass('sticky');
			}
			if(scrollTop > 86){
				$('.nav').addClass('sticky');
				$('.burger').addClass('sticky');
			}
			if(window.innerWidth < 750){
				$('.burger').css({top: 250 - scrollTop + 'px'});
				$('.burger.is-open').css({top: 250 - scrollTop + 'px !important'});
				$('.nav').css({top: 250 - scrollTop + 'px'})
				if(scrollTop < 250){
					$('.nav').removeClass('sticky');
					$('.burger').removeClass('sticky');
				}
			}
		}
		scroll();
		var st = $(this).scrollTop();

		$('.blog-page__title-text').css({
			'transform' : 'translate(0%,' + st/9  + '%'
		});
		$('.blog-inner__title').css({
			'transform' : 'translate(0%,' + st/9  + '%'
		});
	};

	if(scrollTop > 134){
		$('.nav').addClass('sticky');
		$('.burger').addClass('sticky');
	}


	$('.nav__list-item_link').click(function(e) {
		$('.burger').removeClass('is-open');
		$('.nav').fadeOut(300);
	});


	$('.questions__item-title').click(function() {
		if($(this).hasClass('active')){
			$('.questions__item-title').removeClass('active');
			$('.questions__item-content').slideUp();
			return false;
		}
		$('.questions__item-title').removeClass('active');
		$(this).addClass('active');
		$('.questions__item-content').slideUp();
		$(this).siblings('.questions__item-content').slideToggle();
	});


	window.onresize = function(){
		$('.causes__icon').equivalent();
	};

	if(scrollTop > 134){
		$('.burger').css({top: '11px'});
		$('.nav').css({top: '-2px'});
	};


	$('.burger').click(function() {
		$(this).toggleClass('is-open');
		$('.nav').fadeToggle(300);
	});

	$('.js-link-to-id').click(function(e) {
		var link = $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(link).offset().top }, 500);
		e.preventDefault();
	});


	$('.testimonials__slide-image').click(function() {
		var src = $(this).attr('data-src');
		$('.popup-iframe').fadeIn(300);
		$('.popup-iframe').find('iframe').attr('src', src);
		$('.blur_block').addClass('blur');
	});

	$('.about-popup-video').click(function() {
		var src = $(this).attr('data-src');
		$('.popup-iframe').fadeIn(300);
		$('.popup-iframe').find('iframe').attr('src', src);
		$('.blur_block').addClass('blur');
	});

	$('.js-home__arrow-bottom').click(function(e) {
		$('html,body').stop().animate({ scrollTop: $('#causes').offset().top }, 500);
		e.preventDefault();
	});

	$('.get-project-item-1').click(function() {
		$('.blur_block').addClass('blur');
		$('.project-item-1').fadeIn();
		$('body').addClass('stop');
	});

	$('.get-project-item-2').click(function() {
		$('.blur_block').addClass('blur');
		$('.project-item-2').fadeIn();
		$('body').addClass('stop');
	});

	$('.get-project-item-3').click(function() {
		$('.blur_block').addClass('blur');
		$('.project-item-3').fadeIn();
		$('body').addClass('stop');
	});

	$('.close').click(function(e) {
		$('.blur_block').removeClass('blur');
		$('.popup, .portfolio__popup').fadeOut();
		$('body').removeClass('stop');
		$('.popup-iframe').find('iframe').attr('src', '');
		$('.js-portfolio__popup-slider').slick('unslick');
		$('.portfolio__popup-slide').remove();
	});

	$('.js-get-catalog').click(function(e) {
		$('.blur_block').addClass('blur');
		$('.popup-form-get-catalog').fadeIn();
		$('body').addClass('stop');
	});


	$('.js-view-me').click(function(e) {
		$('.blur_block').addClass('blur');
		$('.popup-form-get-view').fadeIn();
		$('body').addClass('stop');
	});


	$('.js-call-me').click(function(e) {
		$('.blur_block').addClass('blur');
		$('.popup-form-call-me').fadeIn();
		$('body').addClass('stop');
	});


	$(document).mouseup(function (e){
		var popup = $('.popup_wrapper');
		if($('.portfolio__popup').is(':visible')){
			return false;
		} else{
			if (!popup.is(e.target) && popup.has(e.target).length === 0) {
				$('.blur_block').removeClass('blur');
				$('.popup').fadeOut();
				$('body').removeClass('stop');
			};
		}
	});


	$('#testimonials__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 2,
		infinite: false,
		speed: 500,
		nextArrow: '<button class="btn testimonials__slide-arrow-prev"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
		prevArrow: '<button class="btn testimonials__slide-arrow-next"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
		responsive: [{
			breakpoint: 1340,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 660,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});


	$('#js-features__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		speed: 1000,
		nextArrow: '<button class="btn features__slide-arrow-next"></button>',
		prevArrow: '<button class="btn features__slide-arrow-prev"></button>'
	});


	$('.features__item').click(function(e) {
		var index = $(this).index();

		changeIframeSrc(index);
		$('.features__item').removeClass('features__item_active');
		$(this).addClass('features__item_active');
		$('#js-features__slider').slick('slickGoTo', index);
	});


	$('.features__slide-arrow-next, .features__slide-arrow-prev').click(function(e) {
		var index = $('#js-features__slider').slick('slickCurrentSlide');

		changeIframeSrc(index);
		$('.features__item').removeClass('features__item_active');
		$('.features__item').eq(index).addClass('features__item_active');
	});

	$('#js-features__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var index = $('#js-features__slider').slick('slickCurrentSlide');
		changeIframeSrc(index);
		$('.features__item').removeClass('features__item_active');
		$('.features__item').eq(index).addClass('features__item_active');
	});

	setTimeout(function(){
		$('.causes__icon').equivalent();
		$('.testimonials__slide-descr').equivalent();
	},300);


	$('.portfolio__item-link').click(function(e) {
		e.preventDefault();
		var b = '',
		title = $(this).find('.portfolio__item-title').text(),
		a = $('.portfolio__item-link').find('.js-portfolio__item_data').attr('data-mass').split(',');
		$('.burger').removeClass('is-open');
		$('.nav').fadeOut();
		storedArray = a;
		storedArray.forEach(function(a) {
			b += '<div class="portfolio__popup-slide"><img src="' + a + '"/></div>'
		});
		$('.portfolio__popup-img img').attr('src',a[1]);
		$('.js-portfolio__popup-slider').append($(b));
		$('.portfolio__popup').fadeIn();
		$('body').addClass('stop');
		$('.blur_block').addClass('blur');

		$('.js-portfolio__popup-slider').slick({
			arrows: true,
			dots: false,
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			nextArrow: '<button class="btn portfolio__popup-slider-prew"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
			prevArrow: '<button class="btn portfolio__popup-slider-next"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
			responsive: [{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
		$('.portfolio__popup-slide').on('click', 'img', function(e) {
			var linkImage = $(this).attr('src');
			$('.portfolio__popup-img img').attr('src',linkImage);
		});
	});

	$(document).mouseup(function (e){
		var div = $('#portfolio__popup');
		if($('.portfolio__popup').is(':visible')){
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				$('.portfolio__popup').fadeOut();
				$('body').removeClass('stop');
				$('.blur_block').removeClass('blur');
				$('.js-portfolio__popup-slider').slick('unslick');
				$('.portfolio__popup-slide').remove();
			}
		};
	});

	$('.policy-link_conf').click(function(e) {
		e.preventDefault();
		$('.popup-policy-conf').fadeIn();
		$('body').addClass('stop');
	});

	$('.policy-link_respons').click(function(e) {
		e.preventDefault();
		$('.popup-policy-respons').fadeIn();
		$('body').addClass('stop');
	});

	$('.policy-link_letters').click(function(e) {
		e.preventDefault();
		$('.popup-policy-letters').fadeIn();
		$('body').addClass('stop');
	});


	$('.js-portfolio__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		nextArrow: '<button class="btn portfolio__slider-prew"></button>',
		prevArrow: '<button class="btn portfolio__slider-next"></button>',
		responsive: [{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$('.maskedinput-tel').mask('+38-(999)-999-99-99');

	if ($("#form-call-me").length){
		$("#form-call-me").validate({

			rules:{
				name:{
					required: true,
					minlength: 3,
				},
				phone:{
					required: true,
				},
			}
		});
	}

	$('#form-call-me').submit(function(e) {
		if (!$(this).valid()) return false;
		e.preventDefault();

		$.ajax({
			url: '/wp-content/themes/alegar-storyhaus/mail/get-call.php',
			type: 'POST',
			data: $(this).serialize(),
		})
		.done(function() {
			$('.popup-form-call-me').fadeOut();
			$('.popup-thanks-main').fadeIn();
			$('body').addClass('stop');
			var text = $('.js-get-info').attr('data-text');
			$('.js-popup-thanks_text').text(text);
			setTimeout(function(){
				$('.popup-thanks-main').fadeOut();
				$('.popup').fadeOut();
				$('.blur_block').removeClass('blur');
				$('body').removeClass('stop');
			}, 3000);
			$('#form-call-me').find('input').val('');
		})
		.fail(function() {
			console.log("error");
		})
		return false;
	});

	if ($("#video__form").length){
		$("#video__form").validate({

			rules:{
				name:{
					required: true,
					minlength: 3,
				},
				phone:{
					required: true,
				},
			}
		});
	}

	$('#video__form').submit(function(e) {
		if (!$(this).valid()) return false;
		e.preventDefault();

		$.ajax({
			url: '/wp-content/themes/alegar-storyhaus/mail/after-video.php',
			type: 'POST',
			data: $(this).serialize(),
		})
		.done(function() {
			var text = $('.js-video-send').attr('data-text');
			$('.blur_block').addClass('blur');
			$('.popup-thanks-main').fadeIn();
			$('body').addClass('stop');
			$('.js-popup-thanks_text').text(text);
			setTimeout(function(){
				$('.popup-thanks-main').fadeOut();
				$('.popup').fadeOut();
				$('.blur_block').removeClass('blur');
				$('body').removeClass('stop');
			}, 3000);
			$('#video__form').find('input').val('');
		})
		.fail(function() {
			console.log("error");
		})
		return false;
	});

	if ($("#get-view").length){
		$("#get-view").validate({

			rules:{
				name:{
					required: true,
					minlength: 3,
				},
				email: {
					required: true,
					email: true,
				},
				phone:{
					required: true,
				},
			}
		});
	}

	$('#get-view').submit(function(e) {
		if (!$(this).valid()) return false;
		e.preventDefault();

		$.ajax({
			url: '/wp-content/themes/alegar-storyhaus/mail/get-view.php',
			type: 'POST',
			data: $(this).serialize(),
		})
		.done(function() {
			$('.popup-form-get-view').fadeOut();
			$('.popup-thanks-main').fadeIn();
			$('body').addClass('stop');
			var text = $('#js-get-view-btn-submit').attr('data-text');
			$('.js-popup-thanks_text').text(text);
			setTimeout(function(){
				$('.popup-thanks-main').fadeOut();
				$('.popup').fadeOut();
				$('.blur_block').removeClass('blur');
				$('body').removeClass('stop');
			}, 3000);
			$('#get-view').find('input').val('');
		})
		.fail(function() {
			console.log("error");
		})
		return false;
	});






	if ($("#project-item-1").length){
		$("#project-item-1").validate({

			rules:{
				name:{
					required: true,
					minlength: 3,
				},
				email: {
					required: true,
					email: true,
				},
				phone:{
					required: true,
				},
			}
		});
	}

	$('#project-item-1').submit(function(e) {
		if (!$(this).valid()) return false;
		e.preventDefault();

		$.ajax({
			url: '/wp-content/themes/alegar-storyhaus/mail/cat-less-100.php',
			type: 'POST',
			data: $(this).serialize(),
		})
		.done(function() {
			$('.popup-form-get-catalog').fadeOut();
			$('.popup-thanks-main').fadeIn();
			$('body').addClass('stop');
			var text = $('#project-item-1 .js-get-catalog-thanks').attr('data-text');
			$('.js-popup-thanks_text').text(text);
			setTimeout(function(){
				$('.popup-thanks-main').fadeOut();
				$('.blur_block').removeClass('blur');
				$('body').removeClass('stop');
			}, 3000);
			$('#project-item-1').find('input').val('');
		})
		.fail(function() {
			console.log("error");
		})
		return false;
	});



	if ($("#project-item-2").length){
		$("#project-item-2").validate({

			rules:{
				name:{
					required: true,
					minlength: 3,
				},
				email: {
					required: true,
					email: true,
				},
				phone:{
					required: true,
				},
			}
		});
	}

	$('#project-item-2').submit(function(e) {
		if (!$(this).valid()) return false;
		e.preventDefault();

		$.ajax({
			url: '/wp-content/themes/alegar-storyhaus/mail/cat-less-200.php',
			type: 'POST',
			data: $(this).serialize(),
		})
		.done(function() {
			$('.popup-form-get-catalog').fadeOut();
			$('.popup-thanks-main').fadeIn();
			$('body').addClass('stop');
			var text = $('#project-item-2 .js-get-catalog-thanks').attr('data-text');
			$('.js-popup-thanks_text').text(text);
			setTimeout(function(){
				$('.popup-thanks-main').fadeOut();
				$('.blur_block').removeClass('blur');
				$('body').removeClass('stop');
			}, 3000);
			$('#project-item-2').find('input').val('');
		})
		.fail(function() {
			console.log("error");
		})
		return false;
	});



	if ($("#project-item-3").length){
		$("#project-item-3").validate({

			rules:{
				name:{
					required: true,
					minlength: 3,
				},
				email: {
					required: true,
					email: true,
				},
				phone:{
					required: true,
				},
			}
		});
	}

	$('#project-item-3').submit(function(e) {
		if (!$(this).valid()) return false;
		e.preventDefault();

		$.ajax({
			url: '/wp-content/themes/alegar-storyhaus/mail/cat-more-200.php',
			type: 'POST',
			data: $(this).serialize(),
		})
		.done(function() {
			$('.popup-form-get-catalog').fadeOut();
			$('.popup-thanks-main').fadeIn();
			$('body').addClass('stop');
			var text = $('#project-item-3 .js-get-catalog-thanks').attr('data-text');
			$('.js-popup-thanks_text').text(text);
			setTimeout(function(){
				$('.popup-thanks-main').fadeOut();
				$('.blur_block').removeClass('blur');
				$('body').removeClass('stop');
			}, 3000);
			$('#project-item-3').find('input').val('');
		})
		.fail(function() {
			console.log("error");
		})
		return false;
	});




	if ($("#get-catalog").length){
		$("#get-catalog").validate({

			rules:{
				name:{
					required: true,
					minlength: 3,
				},
				email: {
					required: true,
					email: true,
				},
				phone:{
					required: true,
				},
			}
		});
	}

	$('#get-catalog').submit(function(e) {
		if (!$(this).valid()) return false;
		e.preventDefault();

		$.ajax({
			url: '/wp-content/themes/alegar-storyhaus/mail/get-full-cat.php',
			type: 'POST',
			data: $(this).serialize(),
		})
		.done(function() {
			$('.popup-form-get-catalog').fadeOut();
			$('.popup-thanks-main').fadeIn();
			$('body').addClass('stop');
			var text = $('#get-catalog .js-get-catalog-thanks').attr('data-text');
			$('.js-popup-thanks_text').text(text);
			setTimeout(function(){
				$('.popup-thanks-main').fadeOut();
				$('.blur_block').removeClass('blur');
				$('body').removeClass('stop');
			}, 3000);
			$('#get-catalog').find('input').val('');
		})
		.fail(function() {
			console.log("error");
		})
		return false;
	});

	if ($("#contact__form").length){
		$("#contact__form").validate({

			rules:{
				phone:{
					required: true,
				},
			}
		});
	}

	$('#contact__form').submit(function(e) {
		if (!$(this).valid()) return false;
		e.preventDefault();

		$.ajax({
			url: '/wp-content/themes/alegar-storyhaus/mail/questions.php',
			type: 'POST',
			data: $(this).serialize(),
		})
		.done(function() {
			$('.popup-thanks-main').fadeIn();
			$('.blur_block').addClass('blur');
			$('body').addClass('stop');
			var text = $('.js-tel-send').attr('data-text');
			$('.js-popup-thanks_text').text(text);
			setTimeout(function(){
				$('.popup-thanks-main').fadeOut();
				$('.blur_block').removeClass('blur');
				$('body').removeClass('stop');
			}, 3000);
			$('#contact__form').find('input').val('');
		})
		.fail(function() {
			console.log("error");
		})
		return false;
	});

});



function changeIframeSrc(index){
	var src = $('.features__item').eq(index).attr('data-src');
	$('.features__slide iframe').attr('src','');
	$('.features__slide').eq(index).find('iframe').attr('src', src);
};

$.fn.equivalent = function (){
	var $blocks = $(this),
	maxH = $blocks.eq(0).height(); 

	$blocks.each(function(){
		if ( $(this).height() > maxH ) {
			maxH = $(this).height();
		};
	});
	$blocks.height(maxH); 
};