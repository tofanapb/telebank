

$(document).ready(function () {
	// date picker 
	$( function() {
		$( "#datepicker" ).datepicker();
	} );
	

	$('#loadmore').click(function (e) { 
		e.preventDefault();
		$('#postgrid2').show();
		$('.post_slider_inner').slick('setPosition'); 
		$(this).hide();

	});

	$('#lodemore1').click(function (e) { 
		e.preventDefault();
		$('#postmore1').show();
		$('.post_slider_inner').slick('setPosition'); 
		$(this).hide();

	});

	//liked
	$('.likebtn').on('click' , function(){
		$(this).toggleClass('active');
	});

	//Menu
	$('.advancd_search').on('click' , function(){
		$('.advancs_search_hidden_box').addClass("active");
		$('.header_top_form').hide();
	});
	 
	$('.advancs_submit_btn').on('click' , function(){
		$('.advancs_search_hidden_box').removeClass("active");
		$('.header_top_form').show();
	});

   //slider 
   $('.menu_slider_inner').slick({
	dots: false,
	cssEase: 'linear',
	rtl: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	prevArrow: '<a href="#" class="progessNext"> > </a>',
	nextArrow: '<a href="#" class="progessPrev"> < </a>',
	centerPadding: '20px',
	responsive: [{
		breakpoint: 991,
		settings: {
			slidesToShow: 5,
			centerMode: true,
			centerPadding: '10px',
			nextArrow: false,
			prevArrow: false,
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 4,
			centerMode: true,
			nextArrow: false,
			prevArrow: false,
		}
	},
	{
		breakpoint: 575,
		settings: {
			slidesToShow: 3,
			centerPadding: '0px',
			centerMode: true,
			nextArrow: false,
			prevArrow: false,
		}
	},
		],
	});

	//morgages page slider
	$('.hero_patner_slider').slick({
		dots: false,
		cssEase: 'linear',
		autoplay: true,
  		autoplaySpeed: 1000,
		rtl: true,
		prevArrow: '<a href="#" class="progessNext"> > </a>',
		nextArrow: '<a href="#" class="progessPrev"> < </a>',
		slidesToShow: 12,
		slidesToScroll: 1,
		centerPadding: '20px',
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 6,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
				centerPadding: '10px',
			}
		},
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 3,
				centerPadding: '10px',
			}
		}
			],
		});

		//morgages page slider
	$('.hero_slider_inner').slick({
		dots: true,
		cssEase: 'linear',
		rtl: true,
		prevArrow: '<a href="#" class="progessNext"> > </a>',
		nextArrow: '<a href="#" class="progessPrev"> < </a>',
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
		centerPadding: '10px',
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				centerPadding: '0px',
				dots: true,

			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				dots: true,
			}
		}
			],
		});


	//servics slider 
	$('.servics_slider_inner').slick({
		dots: false,
		autoplay: true,
  		autoplaySpeed: 1000,
		cssEase: 'linear',
		rtl: true,
		prevArrow: '<a href="#" class="progessNext"> > </a>',
		nextArrow: '<a href="#" class="progessPrev"> < </a>',
		slidesToShow: 8,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 7,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
				centerMode: true,
				centerPadding: '20px',
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 4,
				centerMode: true,
				centerPadding: '10px',
			}
		},
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 4,
				centerMode: true,
				centerPadding: '0px',
			}
		}
			],
		});


	//team membor slider 
	$('.team_slider_inner').slick({
		dots: false,
		cssEase: 'linear',
		rtl: true,
		prevArrow: '<a href="#" class="progessNext"> > </a>',
		nextArrow: '<a href="#" class="progessPrev"> < </a>',
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				centerMode: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '20px',
			}
		}
			],
		});

	//main rotate slider 
	$('.slider_inner_item').slick({
		dots: false,
		cssEase: 'linear',
		rtl: true,
		prevArrow: '<a href="#" class="progessNext"> > </a>',
		nextArrow: '<a href="#" class="progessPrev"> < </a>',
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '50px',
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				centerMode: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '20px',
			}
		}
			],
		});

	//blog post slider 
	$('.post_slider_inner').slick({
		dots: false,
		cssEase: 'linear',
		rtl: true,
		prevArrow: '<a href="#" class="progessNext slider_arrow_balck"> > </a>',
		nextArrow: '<a href="#" class="progessPrev slider_arrow_balck"> < </a>',
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '20px',
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				centerMode: true,
				centerPadding: '60px',
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '50px',
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '30px',
			}
		},
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '20px',
			}
		}
			],
		});

		//category page blog post slider 
	$('.post_slider_inner_category, .post_slider_inner_category2').slick({
		dots: false,
		cssEase: 'linear',
		rtl: true,
		prevArrow: '<a href="#" class="progessNext"> > </a>',
		nextArrow: '<a href="#" class="progessPrev"> < </a>',
		slidesToShow: 2,
		slidesToScroll: 1,
		centerPadding: '20px',
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '60px',
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '50px',
			}
		},
		{
			breakpoint: 676,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '0px',
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '0px',
			}
		},
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '0px',
			}
		}
			],
		});

   //       scroll_top   
   $(window).scroll(function () {
		if ($(this).scrollTop()) {
			$('.to_top').fadeIn();
			$('.header_menu_area').addClass('stiky');
		} else {
			$('.to_top').fadeOut();
			$('.header_menu_area').removeClass('stiky');
		}
	});

	$(".to_top").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});

});
