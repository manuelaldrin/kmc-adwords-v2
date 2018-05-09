( function($) {

	var app =  {

		init: function(){
			this.fullpageFunction();
			this.featpropFunction();
			// this.magnificPopUpFunction();
			// this.modalFunction();
			this.modalLinksFunction();
			// this.fpimageheightFunction();
			this.linksFunction();
		},

		fullpageFunction: function(){
			$(".fullpage-wrap").onepage_scroll({
			   	sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
			   	easing: "ease",           		// Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
			                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
			   	animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
			   	pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
			   	updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
			   	beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
			   	afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
			   	loop: false,                  	// You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
			   	keyboard: false,                  // You can activate the keyboard controls
			   	responsiveFallback: 992,        	// You can fallback to normal page scroll by defining the width of the browser in which
			                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
			                                    // the browser's width is less than 600, the fallback will kick in.
			   	direction: "horizontal"      	// You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
			});

			// $('#fullpageID').fullpage({
			// 	//Scrolling
			// 	css3: true,
			// 	scrollingSpeed: 700,
			// 	autoScrolling: true,
			// 	fitToSection: true,
			// 	fitToSectionDelay: 1000,
			// 	scrollBar: false,
			// 	easing: 'easeInOutCubic',
			// 	easingcss3: 'ease',
			// 	loopBottom: false,
			// 	loopTop: false,
			// 	loopHorizontal: true,
			// 	continuousVertical: false,
			// 	continuousHorizontal: true,
			// 	scrollHorizontally: false,
			// 	interlockedSlides: false,
			// 	dragAndMove: true,
			// 	offsetSections: false,
			// 	resetSliders: false,
			// 	fadingEffect: false,
			// 	scrollOverflow: false,
			// 	scrollOverflowReset: false,
			// 	scrollOverflowOptions: null,
			// 	touchSensitivity: 15,
			// 	normalScrollElementTouchThreshold: 5,
			// 	bigSectionsDestination: null,

			// 	//Accessibility
			// 	keyboardScrolling: true,
			// 	animateAnchor: true,
			// 	recordHistory: true
			// });
		},

		magnificPopUpFunction: function(){
			$('.popup-link').magnificPopup({
			  type: 'image',
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});

		},

		featpropFunction: function(){

			 // Slick for FP Details
	        $('.featprop-details-holder').slick({
	            infinite: true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: true,
	            autoplay: true,
	            autoplaySpeed: 5000,
	            dots: false,
	            appendArrows: $('.featprop-details-nav'),
	            prevArrow: '<div class="slick-prev fp-arrows"></div>',
	            nextArrow: '<div class="slick-next fp-arrows"></div>',
	            asNavFor: '.featprop-photo-holder'
	        });

	        // Slick for FP Image
	        $('.featprop-photo-holder').slick({
	            infinite: true, 
	            slidesToShow: 1, 
	            slidesToScroll: 1, 
	            arrows: false, 
	            autoplay: true, 
	            autoplaySpeed: 5000, 
	            dots: false, 
	            asNavFor: '.featprop-details-holder'
	        });

	         // Slick for FP Details
	        $('.featpropmain-holder').slick({
	            infinite: true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: true,
	            autoplay: true,
	            autoplaySpeed: 7000,
	            dots: false,
	            appendArrows: $('.featpropmain-nav'),
	            prevArrow: '<div class="slick-prev fp-arrows far fa-arrow-alt-circle-left"></div>',
	            nextArrow: '<div class="slick-next fp-arrows far fa-arrow-alt-circle-right"></div>'
	        });


		},

		modalFunction: function(){
			$('.services-col-wrap').click(function(){
				setTimeout(function(){
					$('.modal-backdrop').detach().prependTo('.modal');	
				},10);
			});

			$('.modal-header button, .modal-footer button').click(function(){
				$('.modal-backdrop').remove();	
			});
		},

		modalLinksFunction: function(){

			$('.modal-readmore-link').click(function() {
				$('.p-hide').slideToggle( "fast", function() {
					if($('.p-hide').is(':visible')){
						$('.modal-readmore-link').text('Read Less');
					} else {
						$('.modal-readmore-link').text('Read More');
					}
					
				});
				
			});

			$('.modal-contact-link').click(function() {
				$('.modal-backdrop').remove();
				$('.onepage-pagination li').find('a').attr('href','#4').trigger('click');
			});

		},

		fpimageheightFunction: function(){
			if($(window).width() > 991){
				var windowHeight = $(window).height();
				$('.featimages-item').height( (windowHeight / 2) - 50 );	
			}
			
		},

		linksFunction: function(){
			$('.tagline-btn a').click(function() {
				$('.onepage-pagination li').find('a').attr('href','#4').trigger('click');
			});			
		}



	} 

	$(document).ready( function() {
		app.init();
	});

	$(window).load(function () { 
		
	});

	$(window).resize(function () { 
		app.fullpageFunction();
		app.fpimageheightFunction();
	});
	
})(jQuery);