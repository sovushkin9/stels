$(function() {
	$('.product-card__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: $('.product-card__slider').parent().find('.product-card__slider-prev'),
        prevArrow: $('.product-card__slider').parent().find('.product-card__slider-next'),
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


	$('.product-cake__inner_similar').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		centerMode: true,
		centerPadding: 30,
		nextArrow: $('.product-cake__inner_similar').parent().find('.product-card__slider-prev'),
        prevArrow: $('.product-cake__inner_similar').parent().find('.product-card__slider-next'),
		responsive: [
            {
                breakpoint: 600,
                settings: "unslick"
            }
        ]	
	});

	$('.product-cake__inner_property').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		nextArrow: $('.product-cake__inner_property').parent().find('.product-card__slider-prev'),
        prevArrow: $('.product-cake__inner_property').parent().find('.product-card__slider-next'),
		responsive: [
            {
                breakpoint: 600,
                settings: "unslick"
            }
        ]	
	});

	$(window).on('resize orientationchange', function() {
  		$('.product-cake__inner_similar').slick('resize');
  		$('.product-cake__inner_property').slick('resize');
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
		if($(window).width() > 899){
			var marginLeft= $('.page-container').css('margin-left');
			$('.category-banner__desc').css('margin-left',marginLeft);
		} else {$('.category-banner__desc').css('margin-left',0);}
	}
	sizing();
	$(window).resize(sizing);
});
