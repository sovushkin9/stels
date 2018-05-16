$.fn.zoom = function() {
	var zoomImg,
		imageWidth,
		imageHeight,
		i,
		topOffset,
		isOpened = false,
		isFullZoom = false,
		fadeTime = 500

	this.each(function() {
		var $this = $(this)

		// if containers doesn't exist
		if ($('#zoomCon').length == 0) {
			$(this).append("<div id='zoomCon'></div>")
			$(this).append("<div id='preloaderCon'></div>")
		}

		var fullzoom = $(".fullzoom"),
			zoomButton = $(".zoom"),
			preloader = $("#preloaderCon"),
			zoomCon = $("#zoomCon"),
			windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			scrolling = "horizontal",
			cacheObject,
			prel = preloader.children().eq(0)

		zoomCon.append("<div id='back'></div>")
		preloader.append("<img src='img/preloader.gif'/>")

		var preloaderWidth = prel.width(),
			preloaderHeight = prel.height()

		preloader.css({
			'position':'absolute',
			'width':preloaderWidth,
			'height':preloaderHeight,
			'top':windowHeight/2-preloaderHeight/2,
			'left': windowWidth /2-preloaderWidth/2,
			'visibility':'hidden'
		})

		zoomCon.css({
			'position':'fixed',
			'width': windowWidth,
			'height': windowHeight,
			'z-index':'9998',
			'top':'0px',
			'left' :'0px',
			'overflow':'hidden',
			'visibility':'hidden',
			'cursor': 'all-scroll'
		})
		$("#back").css({
			'position':'absolute',
			'width': windowWidth,
			'height': windowHeight,
			'top':'0px',
			'left' :'0px',
			'background-color':'#000',
			'opacity':'0.9'
		})
		cacheObject = zoomCon.children().eq(1)
		cacheObject.css({
			'position':'absolute',
			'top':'0px',
			'left' :'0px'
		})

		function checkScrolling()  ///type of scrolling
		{

			if (isFullZoom == true) {

				if ((imageWidth <= windowWidth) || (imageHeight <= windowHeight)) {    //if the image is smaller than window
					scrolling = "none"
					cacheObject.css({
						'top': windowHeight / 2 - imageHeight/2,
						'left': windowWidth / 2 - imageWidth/2,
						'position': 'absolute',
					})
				}
				else {
					scrolling = "verhor"                 //if the image has fullzoom class
					cacheObject.css({
						'top': -(imageHeight - windowHeight) / 2,
						'left': -(imageWidth - windowWidth) / 2,
						'position': 'absolute',
					})
				}
			}
			else {
				if ((windowWidth / windowHeight) < (imageWidth / imageHeight)) {
					scrolling = "horizontal"
				}
				else {
					scrolling = "vertical"
				}

				if (scrolling == "vertical") {                   //vertical scrolling
					cacheObject.css({
						'left': 0,
						'width': windowWidth,
						'height': windowWidth * (imageHeight / imageWidth),
						'position': 'absolute'
					})
					imageWidth = cacheObject.width()
					imageHeight = cacheObject.height()

				}
				else {                                            //horizontal scrolling

					cacheObject.css({
						'top': 0,
						'height': windowHeight,
						'width': windowHeight * (imageWidth / imageHeight),
						'position': 'absolute',
						'overflow' : 'hidden'
					})
					imageWidth = cacheObject.width()
					imageHeight = cacheObject.height()
				}
			}
		}

		function handleResize(){                    //resize function
			windowWidth = $(window).width()
			windowHeight = $(window).height()

			checkScrolling()

			$("#back").css({
				'width': windowWidth+10,
				'height': windowHeight+10
			})
			zoomCon.css({
				'overflow': 'hidden',
				'width': windowWidth,
				'height': windowHeight
			})

			preloader.css({
				'top':windowHeight/2-preloaderHeight/2,
				'left': windowWidth /2-preloaderWidth/2
			})
		}

		$(window).resize(handleResize)
		handleResize()

		zoomButton.click(function(event) {				//when click the image
			if (windowWidth > 1200)
				event.preventDefault()
			openZoom(this)
		})

		zoomCon.click(function() {                  //close zoom
			closeZoom()
		})

		function openZoom(_this) {
			if (windowWidth > 1200) {
				if (isOpened) return

				topOffset = $(_this).offset().top

				isOpened = true

				$('body').css({
					'overflow': 'hidden'
				})									//loading image

				//scroll(0,0)
				checkScrolling()

				preloader.css({
					'visibility': 'visible'
				})

				var wW = $(window).width()
				zoomImg = $(_this).attr('href')

				zoomCon.append("<img src='" + zoomImg + "' />")
				cacheObject = zoomCon.find("img").eq(0)
				cacheObject.load(handleLoaded)
				if ($(_this).hasClass("fullzoom")) {
					isFullZoom = true
				}
			}
		}
		function closeZoom() {
			if (!isOpened) return

			$('body').css({
				'overflow': 'auto'
			})

			scroll(0, topOffset-windowHeight/2)

			cacheObject.remove()
			zoomCon.css({
				'visibility':'hidden'
			})

			isOpened = false
			isFullZoom = false

			windowWidth = $(window).width()
			windowHeight = $(window).height()

			zoomCon.css({
				'overflow': 'hidden',
				'width': windowWidth,
				'height': windowHeight
			})
		}


		function handleLoaded() {
			// alert("does this work on the IPAD?")
			windowWidth = $(window).width()
			windowHeight = $(window).height()

			cacheObject = zoomCon.children().eq(1)
			imageWidth = cacheObject.width()
			imageHeight = cacheObject.height()

			preloader.css({
				'visibility':'hidden'
			})

			zoomCon.css({
				'visibility':'visible',
				'position' : 'fixed',
				'overflow' : 'hidden',
				'width': windowWidth,
				'height': windowHeight
			})


			checkScrolling()
			if (isFullZoom) {
				cacheObject.mousemove(handleMouse)
			}
			else 
			{
				cacheObject.mousemove(handleMouseVer)
				cacheObject.mousemove(handleMouseHor)
			}

			function handleMouse(e) {
				if (scrolling == "verhor")
					cacheObject.css({
						'top': -((e.pageY - cacheObject.offset().top) / imageHeight * (imageHeight - windowHeight)),
						'left': -((e.pageX - cacheObject.offset().left) / imageWidth * (imageWidth - windowWidth))
					},{queue:false,duration:3})
			}
			function handleMouseHor(e) {
				if(scrolling=="horizontal")
					cacheObject.animate({
						'left' : -((e.pageX-cacheObject.offset().left)/imageWidth * (imageWidth - windowWidth) )
					},{queue:false,duration:3})
			}

			function handleMouseVer(e) {
				if(scrolling=="vertical")
					cacheObject.animate({
						'top' : -((e.pageY-cacheObject.offset().top)/imageHeight * (imageHeight - windowHeight))
					}, {queue:false,duration:3})
			}
		}
		return this
	}) // end each
}

// Position the Zoom index on mobile devices
function positionZoomImg() {
	$("#zoomCon img").css({
		"left": "0 !important",
		"top": "0 !important",
	})
	$("#zoomCon").css({"overflow": "visible !important"})
}

$('body').zoom()