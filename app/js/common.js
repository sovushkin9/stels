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
  		$('.compare__product').slick('resize');
  		$('.compare__slider-inner').slick('resize');
	});


	$('.geometry-tab__item.active').fadeIn();
	function geometryTab(){
		$('.geometry-tab span').click(function(){
			var btns= $(this).parent().find('span');
			var scenes= $(this).parent().parent().parent().find('.geometry-tab__item');
			btns.removeClass('active');
			$(this).addClass('active');
			num=btns.index(this);
			scene=scenes.eq(num);
			scenes.removeClass('active');
			scenes.fadeOut(500);
			scene.addClass('active');
			scene.fadeIn(500);
		})
	}
	geometryTab();

	if($(window).width()>=600){
		$('.product-cake__img').matchHeight();
		$('.product-cake__heading').matchHeight();
		$('.product-cake__charact-list').matchHeight();
	}


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
		draggable: false,
		arrows: false,
		responsive: [
		{
            breakpoint: 0,
            settings: "unslick"
        },
        {
            breakpoint: 600,
            settings: "slick"
        },
	    {
	      breakpoint: 600,
	      settings: {
	        infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			draggable: false,
			swipe: false
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			draggable: false,
			swipe: false
	      }
	    }
	  ]
	});

	$('.compare__slider-inner').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		mobileFirst: true,
		asNavFor: '.compare__product',
		nextArrow: $('.compare__slider-inner').parent().find('.compare__slider-next'),
        prevArrow: $('.compare__slider-inner').parent().find('.compare__slider-prev'),
        responsive: [
        {
            breakpoint: 0,
            settings: "unslick"
        },
        {
            breakpoint: 600,
            settings: "slick"
        },
	    {
	      breakpoint: 600,
	      settings: {
	        infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1
	      }
	    }
	  ]
	});
	


	function closeCompareNitification(){
		$('.compare-notification__close').click(function(){
			$(this).parents('.compare-notification').slideUp();
		})
	}

	closeCompareNitification();


	function partHeadingTab(){
		$('.product-card__tab-heading').click(function(){
			if($(window).width()<600){
				$(this).find('.product-card__tab-picker').toggleClass('active');
				$(this).siblings('.product-card__tab-body').slideToggle();
			}
		})
	}

	partHeadingTab();

	function createSticky(sticky) {
	
	if (sticky.length!==0) {

	var	pos = sticky.offset().top;
	$(window).on("scroll", function() {
    		if ($(window).scrollTop() >= pos){
     			$('body').css('padding-top',sticky.height());
     			sticky.addClass("fixed");
     		}
     		else {
     			$('body').css('padding-top',0);
     			sticky.removeClass("fixed");
     		}      
 		});			
	 	}
	 }

	createSticky($(".compare__table-nav"));
	
	function productListSlider() {
		var slider = $('.product__slider-big')
		slider.on('init', function() {
			$('.product__slider-big').addClass('ready')
		})
		slider.slick({
			slidesToShow: 1,
			infinite: false,
			asNavFor: $('.product__slider-thumbs'),
			fade: true,
			draggable: false,
			arrows: false,
		})
		var slides = $('.product__item.slick-slide:not(.slick-cloned)')
		var thumbClass = $('[data-thumbclass]').data('thumbclass')
		// generating list of thumbnails
		slides.each(function(index, element) {
			// get current slide image url
			var url = $(element).find('img').data('src')
			// creating new thumbnail
			var item = document.createElement('div')
			var img = document.createElement('img')
			img.src = url
			$(item).addClass(thumbClass)
			$(item).append(img)
			var container = $('.product__slider-thumbs');
			container.append(item);
		});
		var thumbnails = $('.product__slider-thumbs');
		thumbnails.on('init', function() {
			$('.product__slider-outer').addClass('ready')
		})
		thumbnails.slick({
			slidesToShow: 1,
			infinite: false,
			asNavFor: $('.product__slider-big'),
			arrows: false,
		});

		$('.product__thumb').click(function() {
			var index = $(this).index()
			slider.slick('slickGoTo', index)
		})
	}
	productListSlider()

});
