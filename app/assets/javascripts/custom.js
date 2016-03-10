$(document).ready(function() {

	// Init Fast click
	//$(function() {
   	//	FastClick.attach(document.body);
	//});

	//$(".fullHeight").css("min-height", $(window).height());

	// The cave to hide
	//$(".msg_success").hide();

	//*******************
	// Animation Center *
	//*******************
	// Build Controller
	var controller = new ScrollMagic.Controller();
	
	//--- Home Circle Text Animation
	var $tl = new TimelineMax({repeat: -1});
	$tl.to($(".logo_text_circle, .logo_text_circle_mobile"), 1.5, { rotation: 120, ease: Elastic.easeInOut.config(1.5, 0.8), delay: 1 })
		.to($(".logo_text_circle, .logo_text_circle_mobile"), 1.5, { rotation: 240, ease: Elastic.easeInOut.config(1.5, 0.8), delay: 1 })
		.to($(".logo_text_circle, .logo_text_circle_mobile"), 1.5, { rotation: 360, ease: Elastic.easeInOut.config(1.5, 0.8), delay: 1 })
	var mobileHomeTween = new TimelineMax()
		.from($(".logo_text_channe_mobile"), 2, { opacity: 0, left: "-10%" })
		.from($(".logo_text_design_mobile"), 2, { opacity: 0, right: "-10%" }, "-=2")
	// Build Scene
	var homeScene = new ScrollMagic.Scene({ offset: 150 })
							.setTween($(".logo_text"), 1, { top: "0%" })
							.addTo(controller);
	var homeSceneMobile = new ScrollMagic.Scene({ offset: 10 })
							.setTween(mobileHomeTween)
							.addTo(controller);

	//--- Services Animation
	// Build Tweens
	if ($(window).width() > 767) {
		var servicesTween1 = new TimelineMax()
			.to($(".hidden_div"), 0.1, { display: "inline" })
			.from($(".title_pic1"), 0.5, { left: -300, ease: Elastic.easeOut.config(2.5, 1) })
			.from($(".title_pic2"), 0.5, { top: -300, opacity: 0, ease: Elastic.easeOut.config(2.5, 1) })
			.from($(".title_pic3"), 0.5, { right: -300, ease: Elastic.easeOut.config(2.5, 1) }, "-=1")
			.from($(".image_pic1"), 1, { scale: 0, rotation: -360, ease: Elastic.easeOut.config(0.8, 1) })
			.from($(".image_pic2"), 1.5, { scale: 0, ease: Elastic.easeOut.config(1, 1) }, "-=1")
			.from($(".image_pic3"), 1, { scale: 0, rotation: 360, ease: Elastic.easeOut.config(0.8, 1) }, "-=1.5");
		var servicesTween2 = new TimelineMax()
			.from($(".title_pic4"), 0.5, { left: -300, rotation: 360, ease: Elastic.easeOut.config(0.9, 1) })
			.from($(".title_pic5"), 0.5, { bottom: -300, opacity: 0, rotation: 720, ease: Elastic.easeOut.config(0.9, 1) })
			.from($(".title_pic6"), 0.5, { right: 100, opacity: 0, rotation: -360, ease: Elastic.easeOut.config(0.9, 1) }, "-=1")
			.from($(".image_pic4"), 1, { scale: 0 })
			.from($(".image_pic5"), 1, { scale: 0 }, "-=1")
			.from($(".image_pic6"), 1, { scale: 0 }, "-=1");
		//Build Scenes
		var servicesScene1 = new ScrollMagic.Scene({ triggerElement: "#services", offset: 200, reverse: false })
									.setTween(servicesTween1)
									.addTo(controller);
		var servicesScene2 = new ScrollMagic.Scene({ triggerElement: "#services", offset: 800, reverse: false })
									.setTween(servicesTween2)
									.addTo(controller);	

		// Series of hover animation functions
		$(".service_web_design_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.8, left: "4%", rotation: -45, top: "5%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, top: "15%", left: "12%" });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1, left: "4.5%", rotation: 0, top: "12%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, top: "5%", left: "10%" });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0 });
		});	

		$(".service_responsive_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.7 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, top: "30%", zIndex: 0 });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, top: "18%", zIndex: 1 });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0 });
		});	

		$(".service_startup_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.7, right: "-1%", rotation: 90 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, top: "-25%", right: "12%" });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1, zIndex: 2 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1, right: "2%", rotation: 0 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, top: "0%", right: "0%" });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0, zIndex: 0 });
		});	

		$(".service_web_dev_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.8, left: "20%", bottom: "35%", rotation: 45 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, left: "-12%" });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1, zIndex: 2 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1, left: "5%", bottom: "25%", rotation: 0 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, left: "5%" });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0, zIndex: 0 });
		});	

		$(".service_app_dev_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.8 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, bottom: "20%" });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1, zIndex: 2 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, bottom: "4%" });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0, zIndex: 0 });
		});	

		$(".service_branding_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.7, bottom: "8%", right: "-1%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, bottom: "10%", right: "10%" });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1, zIndex: 2 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1, bottom: "20%", right: "3%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, bottom: "0%", right: "0%" });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0, zIndex: 0 });
		});	
	} else {
		// Series of hover animation functions mobile
		$(".service_web_design_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.8, left: "0%", rotation: -45, top: "-2%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, top: "7%", left: "70%" });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1, left: "10%", rotation: 0, top: "2%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, top: "1%", left: "35%" });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0 });
		});	

		$(".service_responsive_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.7, top: "14%", left: "32%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, top: "25%", left: "10%" });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1, top: "16%", left: "22%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, top: "20%", left: "20%" });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0 });
		});	

		$(".service_startup_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.7, left: "70%", top: "36%", rotation: 90 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, top: "37%", left: "0%" });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1, zIndex: 2 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1, left: "45%", top: "38%", rotation: 0 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, top: "35%", left: "10%" });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0, zIndex: 0 });
		});	

		$(".service_web_dev_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.8, left: "60%", top: "53%", rotation: 45 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, left: "-20%", top: "53%", rotation: -15 });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1, zIndex: 2 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1, left: "15%", top: "54%", rotation: 0 });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, left: "30%", top: "51%", rotation: 0 });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0, zIndex: 0 });
		});	

		$(".service_app_dev_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.8, top: "80%", left: "35%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, top: "63%", left: "5%" });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1, zIndex: 2 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1, top: "76%", left: "20%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, top: "68%", left: "20%" });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0, zIndex: 0 });
		});	

		$(".service_branding_div").hover(function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 0.7, top: "97%", left: "55%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 0.4, top: "80%", left: "0%" });
			$tm.to($(this).children(".service_box"), 1.5, { opacity: 1, zIndex: 10 });
		}, function() {
			$tm.to($(this).children(".title_pic"), 0.5, { opacity: 1, top: "90%", left: "40%" });
			$tm.to($(this).children(".image_pic"), 0.5, { opacity: 1, top: "83%", left: "10%" });
			$tm.to($(this).children(".service_box"), 0.5, { opacity: 0, zIndex: 0 });
		});
	}
	//--- WorkSteps Animation
	if ($(window).width() > 767) {
		var workStepsTween = new TimelineMax()
			.from($(".iphone_pic"), 0.5, { opacity: 0, left: "5%", rotation: 45 })
			.from($(".ipad_pic"), 0.5, { opacity: 0, left: "18%", rotation: -45 }, "-=0.5")

		var workStepsScenes = new ScrollMagic.Scene({ triggerElement: "#work_steps", offset: 900 })
										.setTween(workStepsTween)
										.addTo(controller);
	} else {
		var workStepsTween = new TimelineMax()
			.from($(".iphone_pic"), 0.5, { opacity: 0, left: "22%", rotation: 45 })
			.from($(".ipad_pic"), 0.5, { opacity: 0, left: "65%", rotation: -45 }, "-=0.5")

		var workStepsScenes = new ScrollMagic.Scene({ triggerElement: "#work_steps", offset: 1800 })
										.setTween(workStepsTween)
										.addTo(controller);
	}

	// Bubble Animation
	//$tm.to($(".back"), 0.1, { scale: 0.5 });
	$(".circles_div").hover(function() {
		$tm.to($(this).children(".front"), 0.5, { scale: 0 });
		$tm.to($(this).children(".back"), 0.5, { scale: 1.2 });
	}, function() {
		$tm.to($(this).children(".front"), 0.5, { scale: 1 });
		$tm.to($(this).children(".back"), 0.5, { scale: 0.5});
	});	
 

	//--- Abouts Animation	
	var aboutsTween = new TimelineMax()
		.from($(".profile_pic"), 0.5, { opacity: 0, top: -200 })
		.from($(".this_guy_arrow_pic"), 0.5, { opacity: 0, right: -50, rotation: 720 })
	if ($(window).width() > 767) {
		var aboutsScene = new ScrollMagic.Scene({ triggerElement: "#abouts", offset: -100 })
								.setTween(aboutsTween)
								.addTo(controller);						
	} else {
		var aboutsScene = new ScrollMagic.Scene({ triggerElement: "#abouts", offset: 200 })
								.setTween(aboutsTween)
								.addTo(controller);	
	}	

	//--- Portfolios shadow animation
	var $tm = TweenMax;
	$(".portfolios_image").hover(function() {
		$tm.to($(this), 0.3, { boxShadow: "15px 15px 15px" });	
	}, function() {
		$tm.to($(this), 0.3, { boxShadow: "0px 0px 0px" });	
	});

	//--- Contacts Animation
	var contactsTween = new TimelineMax()
		.from($("#map"), 1, { opacity: 0, left: -50 })
		.from($(".fleche_haut1"), 0.2, { opacity: 0, rotation: -360, bottom: -50 }, "-=0.5")
		.from($(".fleche_haut2"), 0.2, { opacity: 0, rotation: 360, right: -50 })
		.from($(".fleche_haut3"), 0.2, { opacity: 0, rotation: -360, top: -50 })
	var contactsScene = new ScrollMagic.Scene({ triggerElement: "#contacts", offset: 350 })
								.setTween(contactsTween)
								.addTo(controller);





	//--- Navbar
	var $roundNav = $(".roundNav");
	
	$roundNav.hover(function(){
		$tm.to($(this), 1, {rotation:360});
	},
	function(){	
		$tm.to($(this), 1, {rotation:-360});
	});
	// SmoothScroll plugin
	$('#nav a').smoothScroll();

	// Add active link to #nav
	// Cache selectors
	var lastId,
	    topMenu = $("#nav"),
	    topMenuHeight = topMenu.outerHeight()+15,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });
	// Bind to scroll
	$(window).on("scroll", function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .children().removeClass("active")
	         .end().filter('[href="#'+id+'"]').children().addClass("active");
	   }                   
	});
	
	

	//--- Contacts
	// hide spinner
	$(".uil-ripple-css").hide();
	// show spinner on AJAX start
	$(document).ajaxStart(function(){
		$(".uil-ripple-css").show();
		$(".contacts_submit_btn").hide();
		
	});
	// hide spinner on AJAX stop
	$(document).ajaxStop(function(){
		$(".uil-ripple-css").hide();
		$(".contacts_submit_btn").show();
		// Auto-resize contact form
		$(".form_input").autosizeInput();
		autosize($(".text_input"));
	});

	// Auto-resize contact form
	$(".form_input").autosizeInput();
	autosize($(".text_input"));

	// Init google map
	var handler = Gmaps.build('Google');
	handler.buildMap({ 
		provider: { 
			zoom: 12,
			center: new google.maps.LatLng(40.743541, -73.990745)
	 	}, 
	 	internal: {id: 'map'}}, function(){
	 		var markers = handler.addMarkers([
		    	{
			       "lat": 40.743541,
			        "lng": -73.990745,
			        "picture": {
			          "url": "https://s3.amazonaws.com/channedesign/logo/MapPointerCD.png",
			          "width":  50,
			          "height": 88
			        },
			    }
	  		]);
	  	handler.bounds.extendWith(markers);
	});

	//--- Testimonials
	// Init carousel
	$(".testimonials_carousel").owlCarousel({
		items: 1,
		loop: true, 
		autoplay: true,
		center: true,
	});


	


			
});