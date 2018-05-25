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
			scenes.hide()
			scene.addClass('active');
			scene.show()
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
				$(this).parent().children('.product-card__tab-body').slideToggle();
			}
		})
	}

	partHeadingTab();


	function createSticky(sticky) {
	
	if (sticky.length!==0) {

		var	pos = sticky.offset().top;
		$(window).on("resize", function() {
			pos = sticky.offset().top;
		})
		
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

	createSticky($(".product-card__nav"));
	createSticky($(".compare__table-nav"));
	

	function productListSlider() {
		var slider = $('.product__slider-big')
		slider.on('init', function(event, slick) {
			$('.product__slider-big').addClass('ready')
		})
		slider.slick({
			slidesToShow: 1,
			infinite: false,
			fade: true,
			draggable: false,
			arrows: false,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						asNavFor: $('.product__slider-thumbs'),
					}
				}
			]
		})
		var slides = $('.product__item.slick-slide:not(.slick-cloned)')
		var thumbClass = $('[data-thumbclass]').data('thumbclass')
		slides.each(function(index, element) {
			var url = $(element).find('img').data('src')
			var item = document.createElement('div')
			var img = document.createElement('img')
			img.src = url
			$(item).addClass(thumbClass)
			if (index == slider.slick('slickCurrentSlide')) {
				$(item).addClass('active')
			}
			$(item).append(img)
			var container = $('.product__slider-thumbs');
			container.append(item);
		});

		var $slick = false
		var thumbnails = $('.product__slider-thumbs')
		function sliderFunc() {
			var width = $(window).width()
			if (width < 900){
				$('.product__thumb').removeClass('active')
				if (!$slick) {
					thumbnails.slick({
						slidesToShow: 1,
						infinite: false,
						asNavFor: $('.product__slider-big'),
						arrows: false,
					})
					$slick = true
				}
			}
			else
				if ($slick) {
					thumbnails.slick('unslick')
					$slick = false
				}
		}
		sliderFunc()
		$(window).resize(function() {
			sliderFunc()
		})

		$('.product__thumb').click(function() {
			var index = $(this).index()
			slider.slick('slickGoTo', index)
			$('.product__thumb').removeClass('active')
			$(this).addClass('active')
		})
	}
	productListSlider()

	function header() {
		$('.menu-button').click(function() {
			$('.top-menu').slideToggle()
		})
		$('.top-menu ul li span').click(function() {
			if ($(this).parent().hasClass('active')) {
				return
			}
			$('.top-menu li').removeClass('active')
			$('.drop-menu').removeClass('active')
			$(this).parent().addClass('active')
			var item = $(this).parent().children('.drop-menu')
			if (item.length > 0) {
				$(item).addClass('active')
			}
		})
	}
	header()

	function techs() {
		var $slick = false
		var sliderContainer = $('.techs__list')
		function slider() {
			var width = $(window).width()
			if (width < 900){
				if (!$slick) {
					sliderContainer.slick({
						prevArrow: $('.techs__arrow--prev'),
						nextArrow: $('.techs__arrow--next'),
						infinite: false,
						slidesToShow: 1,
					})
					$slick = true
				}
			}
			else
				if ($slick) {
					sliderContainer.slick('unslick')
					$slick = false
				}
		}
		slider()
		$(window).resize(function() {
			slider()
		})

		sliderContainer.on('beforeChange', function() {
			$('.techs__item').removeClass('active')
			updateExtra()
		})

		$(window).resize(function() {
			$('.techs__item').removeClass('active')
			updateExtra()
		})

		$('.techs__item').click(function(e) {
			if ($(e.target).hasClass('.techs__extra') || ($(e.target).closest('.techs__extra').length > 0)) return
			if ($(this).hasClass('active')) {
				$('.techs__item').removeClass('active')
				updateExtra()
				return
			}
			$('.techs__item').removeClass('active')
			$(this).toggleClass('active')
			updateExtra()
		})

		$('.techs__close').click(function() {
			$(this).closest('.techs__item').removeClass('active')
			updateExtra()
		})

		function updateExtra() {
			var item = $('.techs__item.active')
			var extra = item.children('.techs__extra')
			var extraGlobal = $('.techs__extra')
			if (item.length == 0) {
				resetHeight(0)
				extraGlobal.slideUp()
				return
			}
			else {
				var extraHeight = extra.outerHeight(true)
				resetHeight(extraHeight)
			}
			if (extra.is(':visible')) {
				extra.slideUp()
				return
			}
			extraGlobal.slideUp()
			var techOffset = document.querySelector('.product-card__tech .page-container').getBoundingClientRect().left
			var itemOffset = item[0].getBoundingClientRect().left
			var position = itemOffset - techOffset - 20
			position = '-' + position + 'px'
			extra.css('left', position)
			extra.slideDown()
			function resetHeight(height) {
				if ($(window).width() < 900) {
					sliderContainer.css('padding-bottom', height)
					$('.techs__info').css('margin-bottom', '0')
				}
				else {
					sliderContainer.css('padding-bottom', '0')
					$('.techs__info').css('margin-bottom', '0')
					item.find('.techs__info').css('margin-bottom', height)
				}
			}
		}
	}
	techs()

	function scrollNav(){
		$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 700);
	    }
		});
	}

	scrollNav();

	function productNav() {
		function stickyMenu() {
			var topOffset = $(window).scrollTop()
			var navContainer = $('.product-card__nav-outer')
			var nav = $('.product-card__nav')
			var navPos = nav.offset().top
			// $('.menu-item').each(function(i, elem) {
			// 	var waypoints = $()
			// })
			var waypoints = $('.menu-item').waypoint({
				handler: function(direction) {
					$('.product-card__nav-item a').removeClass('active')
					$('a[href="#'+ this.element.id +'"]').addClass('active')
				},
			})
			function toggleMenu() {
				navPos = navContainer.offset().top
				topOffset = $(window).scrollTop()
				if (navPos < topOffset) {
					nav.addClass('fixed')
				}
				else {
					nav.removeClass('fixed')
				}
			}
			toggleMenu()
			$(window).scroll(function() {
				toggleMenu()
			})
		}
		stickyMenu()
	}
	productNav()

});
