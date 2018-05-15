$(function() {
	$('.product-card__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: $('.product-card__slider').parent().find('.product-card__slider-next'),
        prevArrow: $('.product-card__slider').parent().find('.product-card__slider-prev'),
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
		nextArrow: $('.product-cake__inner_similar').parent().find('.product-card__slider-next'),
        prevArrow: $('.product-cake__inner_similar').parent().find('.product-card__slider-prev'),
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
		nextArrow: $('.product-cake__inner_property').parent().find('.product-card__slider-next'),
        prevArrow: $('.product-cake__inner_property').parent().find('.product-card__slider-prev'),
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


	function sizingBaner () {
		if($(window).width() > 899){
			var marginLeft= $('.page-container').css('margin-left');
			$('.category-banner__desc').css('margin-left',marginLeft);
		} else {$('.category-banner__desc').css('margin-left',0);}
	}
	sizingBaner();
	$(window).resize(sizingBaner);


	function matchHeightCompare(){
		var i= $('.compare__table-bl_heading > .compare__table-line').length;
		for(var j=1; j<=i; j++){
			$('[data-matchheight="'+j+'"]').matchHeight({byRow:false});
		}
	}
	matchHeightCompare();


	$('.compare__product').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		mobileFirst: true,
		asNavFor: '.compare__slider-inner',
		draggable: false
	});

	$('.compare__slider-inner').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		mobileFirst: true,
		asNavFor: '.compare__product',
		nextArrow: $('.compare__slider-inner').parent().find('.compare__slider-next'),
        prevArrow: $('.compare__slider-inner').parent().find('.compare__slider-prev'),
	});
	


	function closeCompareNitification(){
		$('.compare-notification__close').click(function(){
			$(this).parents('.compare-notification').slideUp();
		})
	}

	closeCompareNitification();
});
