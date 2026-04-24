/*
Author       : themes_mountain
Template Name: Janemon - Personal Portfolio Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/	
			
		/*START MENU JS*/		
		function windowScroll() {
			const navbar = document.getElementById("navbar");
			if (
				document.body.scrollTop >= 50 ||
				document.documentElement.scrollTop >= 50
			) {
				navbar.classList.add("nav-sticky");
			} else {
				navbar.classList.remove("nav-sticky");
			}
		}

		window.addEventListener('scroll', (ev) => {
			ev.preventDefault();
			windowScroll();
		})	  	
		/*END MENU JS*/

		/*START PROGRESS BAR*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS BAR*/	

		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */		

		/* START JQUERY LIGHTBOX*/
		jQuery('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		});	
		/* END JQUERY LIGHTBOX*/	

		/* START MIX JS - Manual Filter Implementation */
		$(window).on('load', function() {
			console.log('Initializing portfolio filter...');
			
			const filterButtons = document.querySelectorAll('.portfolio_filter .filter');
			const mixItems = document.querySelectorAll('.portfolio_item .mix');
			
			console.log('Filter buttons:', filterButtons.length);
			console.log('Mix items:', mixItems.length);
			
			// Function to filter items
			function filterPortfolio(filterValue) {
				console.log('Filtering by:', filterValue);
				
				mixItems.forEach(item => {
					// Get all classes of the item
					const itemClasses = item.classList;
					
					let shouldShow = false;
					
					if (filterValue === 'all' || filterValue === '*') {
						// Show all
						shouldShow = true;
					} else {
						// Remove leading dot if present
						const filter = filterValue.startsWith('.') ? filterValue.slice(1) : filterValue;
						shouldShow = itemClasses.contains(filter);
					}
					
					if (shouldShow) {
						item.style.display = '';
						item.classList.remove('filter-hidden');
					} else {
						item.classList.add('filter-hidden');
						// Use setTimeout to allow transition to complete before hiding
						setTimeout(() => {
							if (item.classList.contains('filter-hidden')) {
								item.style.display = 'none';
							}
						}, 350);
					}
				});
			}
			
			// Add click event to filter buttons
			filterButtons.forEach(btn => {
				btn.addEventListener('click', function(e) {
					e.preventDefault();
					
					// Update active class
					filterButtons.forEach(b => b.classList.remove('active'));
					this.classList.add('active');
					
					// Get filter value
					const filterValue = this.getAttribute('data-filter');
					filterPortfolio(filterValue);
				});
			});
			
			// Initialize - show all
			filterPortfolio('all');
			console.log('Portfolio filter initialized');
		});		
			
	}); 		

	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
			
})(jQuery);


  

