$(function() {
	$('.product-card__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: $('.product-card__slider-prev'),
        prevArrow: $('.product-card__slider-next'),
        responsive: [
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        centerMode: true
	      }
	    },
	    {
	      breakpoint: 370,
	      settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	        centerMode: false
	      }
	    }
	  ]
	});

	function geometryTab(){
		$('.geometry-tab span').click(function(){
			var btns= $(this).parent().find('span');
			var scenes= $(this).parent().parent().parent().find('.geometry-tab__item');
			btns.removeClass('active');
			$(this).addClass('active');
			num=btns.index(this);
			scene=scenes.eq(num);
			scenes.fadeOut(500);
			scenes.removeClass('active');
			scene.fadeIn(500);
			scene.addClass('active');
		})
	}
	geometryTab();

	$('.product-cake__img').matchHeight();
	$('.product-cake__heading').matchHeight();
	$('.product-cake__charact-list').matchHeight();


	function sizing () {
		var marginLeft= $('.page-container').css('margin-left');
		$('.category-banner__desc').css('margin-left',marginLeft);
	}
	sizing();
	$(window).resize(sizing);
});
