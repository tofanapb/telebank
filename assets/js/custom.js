$(document).ready(function () {

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
			slidesToShow: 4,
			centerMode: true,
			centerPadding: '10px',
			nextArrow: false,
			prevArrow: false,
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 2,
			centerMode: true,
			nextArrow: false,
			prevArrow: false,
		}
	},
	{
		breakpoint: 575,
		settings: {
			slidesToShow: 2,
			centerPadding: '0px',
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
		dots: false,
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

			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
			}
		}
			],
		});


	//servics slider 
	$('.servics_slider_inner').slick({
		dots: false,
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
		prevArrow: '<a href="#" class="progessNext"> > </a>',
		nextArrow: '<a href="#" class="progessPrev"> < </a>',
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
