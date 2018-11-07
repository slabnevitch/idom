$(function() {
	
	$(document).ready(function() {
		// slick
			$('.main-slider_car').slick({
				fade: true,
				centerMode: true,
				zIndex: 1,
				dots: true,
				arrows: false
				// adaptiveHeight: true
			});

			$('.catalog-items').slick({
				// centerMode: true,
				slidesToShow: 5,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 1100,
						settings: {
							slidesToShow: 4

						}	
					},

					{
						breakpoint: 980,
						settings: {
							slidesToShow: 3,
							appendArrows:'.catalog .slider-arrows'
						}	
					},

					{
						breakpoint: 780,
						settings: {
							slidesToShow: 2,
							appendArrows:'.catalog .slider-arrows'
							
						}	
					},

					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							appendArrows:'.catalog .slider-arrows'
							
						}	
					}


				]

			});

			$('.actions-items').slick({
				// centerMode: true,
				slidesToShow: 4,
  				slidesToScroll: 1,
  				responsive: [
					{
						breakpoint: 980,
						settings: {
							appendArrows:'.actions .slider-arrows'
							
						}
					},

					{
						breakpoint: 960,
						settings: {
							slidesToShow: 3,
							
							appendArrows:'.actions .slider-arrows'
							
						}
					},

					{
						breakpoint: 780,
						settings: {
							slidesToShow: 2,
							
							appendArrows:'.actions .slider-arrows'
							
						}
					},

					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							
							appendArrows:'.actions .slider-arrows'
							
						}
					}
				]

			});

			$('.related-items').each(function(index, elem) {
				var $th = $(this),
				 		parentSectSelector = $('section.cart').length > 0 ? "cart" : undefined,
		 				parentClass = $th.closest('section').attr('class');
	 			console.log('parentSectSelector  ' + parentSectSelector );
		 		
		 		$th.slick({
					
					slidesToShow: parentSectSelector == "cart" ? 3 : 4,
	  				slidesToScroll: 1,
	  				responsive: parentSectSelector == "cart" ? [
						{
							breakpoint: 1101,
							settings: {
								slidesToShow: 2,
								appendArrows:'.' + parentClass + ' .slider-arrows'
							}
						},

						{
							breakpoint: 960,
							settings: {
								slidesToShow: 1,
								appendArrows:'.' + parentClass + ' .slider-arrows'
							}
						},

						{
							breakpoint: 780,
							settings: {
								slidesToShow: 2,
								appendArrows:'.' + parentClass + ' .slider-arrows'

							}
						},

						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								appendArrows:'.' + parentClass + ' .slider-arrows'
								
							}
						}
					] : [
						{
							breakpoint: 1101,
							settings: {
								slidesToShow: 3,
								appendArrows:'.' + parentClass + ' .slider-arrows'
							}
						},

						{
							breakpoint: 780,
							settings: {
								slidesToShow: 2,
								appendArrows:'.' + parentClass + ' .slider-arrows'

							}
						},

						{
							breakpoint: 560,
							settings: {
								slidesToShow: 1,
								appendArrows:'.' + parentClass + ' .slider-arrows'
								
							}
						}
					] 
				});
			});
			
			$('.category-slider').slick({
				// centerMode: true,
				slidesToShow: 3,
  				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 981,
						settings: {
							appendArrows:'.category-head .slider-arrows'
							
						}
					},

					{
						breakpoint: 860,
						settings: {
							slidesToShow: 2,
							appendArrows:'.category-head .slider-arrows'
							
						}
					},

					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							appendArrows:'.category-head .slider-arrows'
							
						}
					}
				]


			});

			$('.reviews-slider').slick({
				// centerMode: true,
				slidesToShow: 2,
  				slidesToScroll: 1,
  				responsive: [
					{
						breakpoint: 1100,
						settings: {
							slidesToShow: 1,
							
							appendArrows:'.reviews .slider-arrows'
							
					}
				}

				]

			});

			var $prodDispSlider = $('.product-display').slick({
				// centerMode: true,
				slidesToShow: 1,
  				slidesToScroll: 1,
  				fade: true

			});

			$('.product-display-nav__item').click(function() {
					$prodDispSlider.slick('slickGoTo', $(this).index());
			});

			$('.order-sidebar__slider').slick();
		// end of slick

		// magnific popup
			$('.header-account__search').magnificPopup({
				type: 'inline',
				preloader: false,
				focus: '#name',
				mainClass: 'nidden-search',

				// When elemened is focused, some mobile browsers in some cases zoom in
				// It looks not nice, so we disable it:
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}
					}
				}
			});

			$('.callback-show, .main-slider__price, .to-popup').magnificPopup({
				type: 'inline',
				preloader: false,
				focus: '#name',
				// When elemened is focused, some mobile browsers in some cases zoom in
				// It looks not nice, so we disable it:
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}
					}
				}
			});

			$('.popup-unregistered').magnificPopup({
				type: 'inline',
				preloader: false,
				focus: '#name',
				mainClass: 'user-popup',
				// When elemened is focused, some mobile browsers in some cases zoom in
				// It looks not nice, so we disable it:
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}
					}
				}
			});
		// end magnific popup

		// ikSelect
			
			$('.products-sort select, .per-page-select, .my-orders__sort select, .cabinet-block__select, .order-content__dropdown select').ikSelect({
				autoWidth: false,
				// customClass: 'prod-sort-select',
				// ddCustomClass: 'prod-sort-dd',
				onShow: function (inst) {
					console.log(inst.el);
					console.log($(inst.el).width());
					var currWidth = $(inst.el).closest('.ik_select').find('.ik_select_link').width(),
						$instanceParent = $(inst.el).parent().parent(),
						addedWidth;

					console.log('parent ' + $(inst.el).parent().parent().hasClass('order-content__dropdown'));
					
					$instanceParent.hasClass('order-content__dropdown') ? addedWidth = 29 : addedWidth = 10;

					console.log('addedWidth ' + addedWidth);
					$('.ik_select_dropdown').width(currWidth + addedWidth);
				}
			});

		// end of ikSelect

		// tooltipster
			var customTriggerOpen = {
				mouseenter: true,
			 	tap: true
			 },
			 	customTriggerClose = {
			 		click: true,
				 	// scroll: true,
				 	mouseleave: true,
				 	tap: true
			 	};

			$('.simple-tooltip').tooltipster({
				trigger: 'custom',
				 triggerOpen: customTriggerOpen,
				 triggerClose: customTriggerClose,
				 arrow: false,
				 delay: 100,
				 functionReady: function(instance, helper) {
	
					helper.tooltip.classList.add('tooltip-simple-origin');
				}
				

			});

			$('.header-account__cart, .order-display-tooltip, .popup-registered, .header-account__favorites').tooltipster({
				trigger: 'click',
				// triggerOpen: customTriggerOpen,
				//  triggerClose: customTriggerClose,
				side: ['bottom'],
				 arrow: false,
				 interactive: true,
				 delay: 100,
				 functionInit: function(instance, helper) {
				 	console.log('cart init');
					 	
				 }
				//  functionReady: function(instance, helper) {
	
				// 	helper.tooltip.classList.add('tooltip-simple-origin');
				// }
				

			});

			if(screen.width > 980){

				$('.tooltip').tooltipster({
					trigger: 'custom',
					triggerOpen: customTriggerOpen,
			 		triggerClose: customTriggerClose,
					 arrow: false,
					 interactive: true,
					 // side: ['bottom'],
				  distance: 15,
		
					 functionInit: function(instance, helper) {
					 	if(screen.width < 981){
							return false;
						}

					 	
					 	instance.elementOrigin().addEventListener('click', clickPrevent);
					 },
					 functionReady: function(instance, helper) {
		
						helper.tooltip.classList.add('tooltip-conditions-origin');
						console.log('conditions-instance ' + helper.origin.className);
						helper.origin.parentNode.classList.add('active');
					},

					functionAfter: function(instance, helper) {

						helper.origin.parentNode.classList.remove('active');
					},

					functionPosition:  function(instance, helper, position) {
						   var container = document.querySelector('.tooltipster-base .tooltip-conditions'),
					        	body = document.querySelector('body'),
					        	bodyWidth = helper.geo.window.size.width,
					        	containerWidth = 1085;


					        var summ = (bodyWidth - containerWidth )/2;
					      	console.log('summ ' + summ);
					        position.coord.left = summ;

					        return position;
					}
					 
				});
				function clickPrevent(e) {
					e.preventDefault();
				}
			}

		// end of tooltipster

		// custom scroll
			$('.tooltip-cart').each(function(i, elem) {
				
				var cherryCS = $(this).customScroll({
					horizontal: false
				});

				var $cherryTrack = cherryCS.$container.find('.custom-scroll-advanced_track-y');

				// ф-ция., делающая прокрутку
				function cherryScroll(delta) {
					var $inner = cherryCS.$inner;

					$inner.animate({'scrollTop': $inner.scrollTop() + delta + 'px'}, 100);
				}

				$cherryTrack
				.on('click', function(e) {
					var yPos = e.pageY - $(this).offset().top;
					var barTop = cherryCS.$bar.position().top;
					var h = cherryCS.$container.height() - 20;
					cherryScroll(yPos < barTop ? -h : h);
				})
				.on('click', '.custom-scroll-arrow', function(e) {
					e.stopPropagation();
					var isTop = $(this).hasClass('top');
					cherryScroll(isTop ? -50 : 50);
				});
			});
			// console.log($('.tooltip-cart').length);
			
		// end of custom scroll
			
	});

	// accordeon

		// Accordeon-----------------------------------
		$('.acordeon-link').click(function(e) {
			e.preventDefault();
			var $currentItem = $(this).closest('.acordeon-item');
			if($currentItem.hasClass('acordeon-item-with-sublist')){

				$currentItem.find('.acordeon-sublist')
				.stop(true, true)
				.slideToggle();
				
				

				$currentItem.toggleClass('active-tab')
								.siblings()
								.removeClass('active-tab');

			}else{
				return;
			}
		});

	// end of accordeon

	// mobile menu toggle
		$('.mobile-nav__catalog-title').click(function() {
			$('.mobile-nav__catalog ul').slideToggle();
		});

	// mobile menu toggle

		$('.header-burger').click(function() {
			$('.mobile-nav').slideToggle();
		});

	// end of mobile menu toggle

	// manager-mob toggle
		$('.manager-mob-toggle a').click(function() {
			$('.hidden-managers').fadeToggle();
			return false;
		});

		$('.cabinet-mob-nav__manager-toggle').click(function() {
			var $th = $(this);
			$th.next().slideToggle();
			$th.closest('.hidden-managers-container')
				.toggleClass('filled');

			return false;
		});
	// end of manager-mob toggle
	
	// mega-menu toggle
		$('.header-catalog').click(function() {

				
			$('.mega-menu').toggleClass('active');
			

		});
	// end mega-menu toggle

	// product-views toggle
		$('.products-views__button').click(function() {
			var $th = $(this),
				$viewedItems = $th.closest('.category-main__products')
								.find('.product-item');
			$th.addClass('active')
					.siblings()
					.removeClass('active');
			if($th.hasClass('products-views__rows')){
				$viewedItems.addClass('product-item--row');
			}else{
				$viewedItems.removeClass('product-item--row');
			}

		});
	// end product-views toggle

	// catalog items toggle
		$('.catalog-block__title').click(function() {
			$(this).parent()
				.toggleClass('opened')
				.siblings()
				.removeClass('opened');
		});
	// end of catalog items toggle

	// orders-list toggle
		$('.orders-list__toggle').click(function(e) {
				var $th = $(this),
					$thisBody = $th.closest('.orders-list__header')
											.next();

					$thisBody.slideToggle();
					$th.toggleClass('opened');
				return false;
		});
	// end of orders-list toggle

	// tabs
		var $tabs = $('.tabs__link');

		$tabs.on('click', function(e) {
			e.preventDefault();
			var $th = $(this),
			$href = $th.attr('href'),
			$parent = $th.parent();
			$parent.addClass('tabs__item--active')
			.siblings()
			.removeClass('tabs__item--active');
			
			$($href).removeClass('hidden')
			.siblings()
			.addClass('hidden');
		});
	// end of tabs

	// noUiSlider
		if(document.getElementById('range-slider')){

			var skipSlider = document.getElementById('range-slider');

			noUiSlider.create(skipSlider, {
		    connect: true, //участки шкалы, окрашенные и неокрашенные пользовательскими цветами
		    range: {
		        'min': 4450,
		        
		        'max': 50000
		    },
		    // ariaFormat: wNumb({
		    // 	decimals: 3
		    // }),

		    format: wNumb({
		    	decimals: 0,
		    	thousand: ' '
		    	
		    }),
		    // snap: true, //разрешаем несколько ползунков
		    start: [4450, 24450] //стартовые позиции ползунков, в зависимости от их количества
		});
		console.log(skipSlider.noUiSlider.get()); //получение значение ползунков

		skipSlider.noUiSlider.on('update', function(){
			var lowField = document.querySelector('.sidebar-filter__item .range-low'),
				hightField = document.querySelector('.sidebar-filter__item .range-hight');

				lowField.innerText = skipSlider.noUiSlider.get()[0];
				hightField .innerText = skipSlider.noUiSlider.get()[1];

			console.log('update');
		});
	}

	// end of noUiSlider

	function MobileFilter() {
		var $filterCatToggle = $('.filter-mobile__cat-toggle'),
				$filterToggle = $('.filter-mobile__filter-toggle'),
				$filterCatgs = $('.filter-mobile__cats'),
				$mobFilters = $('.mobile-filters'),
				$linkCurrent = $('.mobile-filters__current'),
				$filterGroup = $('.mobile-filters__groupe'),
				$mainScreen = $('#screen-main'),
				$checkboxes = $('.mobile-filters__screen--hidden .hidden-data'),
				mobRange = document.getElementById('range-slider-mob'),
				$priceLow = $('.mobile-filters__price-low'),
				$priceHight = $('.mobile-filters__price-hight'),
				currentScrollPosition,
				_self = this;

		this.init = function() {
				this.listeners();
				if(document.getElementById('range-slider-mob')){
					this.initMobRange();
				}
		},

		this.listeners = function() {
			$filterCatToggle.on('click', this.catToggle); 
			$linkCurrent.on('click', this.filterHidden); 
			$filterToggle.on('click', this.filterVisible); 
			$filterGroup.on('click', this.filterSliding);
			$checkboxes.on('change', this.select); 

		},

		this.catToggle = function() {
			$filterCatgs.toggleClass('opened');
			$(this).toggleClass('opened');
		},

		this.filterHidden = function() {
			if($mainScreen.hasClass('group-opened')){
				$mainScreen.removeClass('hidden')
					.siblings('.mobile-filters__screen')
					.addClass('hidden');

				$mainScreen.removeClass('group-opened');

				return;
			}
			$mobFilters.fadeOut();
			$('html, body').animate({scrollTop: currentScrollPosition}, 100);
		},
		
		this.filterVisible = function() {
			$mobFilters.fadeIn();
			currentScrollPosition = $(document).scrollTop();
		},

		this.filterSliding = function() {
			var id = $(this).attr('data-filter');

			$mainScreen.addClass('group-opened');

			$('.mobile-filters__screen#' + id).removeClass('hidden')
					.siblings('.mobile-filters__screen')
					.addClass('hidden');
		},

		this.select = function() {
			// console.log('select');
			 var $th = $(this),
		      $clossest = $th.closest('.mobile-filters__screen'),
		      thisData = $clossest.attr('id'),
		      checked = [];

		      if($(this).attr('name') == 'order'){
		      	$clossest.find('input[name=order]:checked').each(function(){
		      		checked.push($(this).val());

		      	});
		      }else{
			      $clossest.find('input:checkbox:checked').each(function(){
			      	checked.push($(this).val());

			      });
		      	
		      }



	      _self.arrUnique(checked);

	      _self.renderFiltered(checked, thisData);

		      
		},

		this.arrUnique = function(arr) {
			var result = [];

				nextInput:
				for (var i = 0; i < arr.length; i++) {
	      var str = arr[i]; // для каждого элемента
	      for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
	        if (result[j] == str) continue nextInput; // если да, то следующий
	      }
	      result.push(str);
	    }

	    return result;
	  },

	  this.renderFiltered = function(arr, parent) {
	  	console.log(arr);
	  	var $currentSelectList = $mainScreen.find('li[data-filter="'+ parent +'" ] .mobile-filters__selected');
	  	
	  	$currentSelectList.empty();

	  	arr.forEach(function(item){
	  		var $checkedValue = $('<span>');
	  	 	$checkedValue.text(item);
	  		$currentSelectList.append($checkedValue);
	  	});
	  },

	  this.initMobRange = function() {
	  	// console.log('initMobRange');
	  	noUiSlider.create(mobRange, {
		    connect: true, //участки шкалы, окрашенные и неокрашенные пользовательскими цветами
		    range: {
		    	'min': 4450,

		    	'max': 50000
		    },

		    format: wNumb({
		    	decimals: 0,
		    	thousand: ' '
		    	
		    }),
		    // snap: true, //разрешаем несколько ползунков
		    start: [4450, 24450] //стартовые позиции ползунков, в зависимости от их количества
		  });

	  	mobRange.noUiSlider.on('update', this.mobRangeUpdate);
	  	mobRange.noUiSlider.on('change', this.mobRangeEnd);
	  },

	  this.mobRangeUpdate = function() {

	  	var lowField = document.querySelector('.mobile-filters__screen .range-low'),
	  		hightField = document.querySelector('.mobile-filters__screen .range-hight');

	  		lowField.innerText = mobRange.noUiSlider.get()[0];
	  		hightField .innerText = mobRange.noUiSlider.get()[1];

	  		// console.log($(mobRange).closest('.mobile-filters__screen--hidden').attr('id'));
	  },

	  this.mobRangeEnd = function() {
	  	$priceLow.closest('.mobile-filters__selected')
	  			.find('span')
	  			.addClass('visible');
	  	$priceLow.text(mobRange.noUiSlider.get()[0]);
	  	$priceHight.text(mobRange.noUiSlider.get()[1]);
	  }
	  	
 		
	}

	var mobileFilter = new MobileFilter();
	mobileFilter.init();

	// cabinet
	function Cabinet() {
		var _self = this,
			$cabDataEditButton = $('.cabinet__data-edit'),
			$addFieldButton = $('.user-hidden-form__add'),
			$blockToggleButton = $('.cabinet-block__toggle'),
			$userDataEditHide = $('#user-data-edit-hide'),
			$userHiddenForm = $('.user-hidden-form'),
			$cabinetFormHider = $('.cabinet-block__form-hider'),
			$managersToggler = $('.my-orders__right-sidebar-top .button');

		this.init = function() {
			this.events();
		},

		this.events = function() {
			$cabDataEditButton.on('click', this.userDataEdit);
			$addFieldButton.on('click', this.addDataField);
			$blockToggleButton.on('click', this.toggleForms);
			$userDataEditHide.on('click', this.userDataHide);
			$cabinetFormHider.on('click', this.hideBlockForms);
			$managersToggler.on('click', this.toggleManagers);

		},
		this.userDataEdit = function() {
			var $th = $(this),
				$hiddenForm = $th.closest('.cabinet-header__standart-view')
								.next('form'),
				$parent = $th.parent();

			$parent.hide(function() {
				$hiddenForm.show();
			});

			return false;
		},

		this.userDataHide= function() {
			var $th = $(this);

			$userHiddenForm.hide(function() {
				$('.cabinet-header__standart-view').show();
			});
			return false;
		},

		this.addDataField = function() {
			$(this).closest('.user-hidden-form__block')
					.find('.standart-label.hidden')
					.removeClass('hidden');
			return false;
		},

		this.toggleForms = function() {
			var $th = $(this),
				$thBlock = $th.closest('.cabinet-block');

			$thBlock
					.find('.cabinet-block__body')
					.removeClass('hidden');
			
			if($th.hasClass('cabinet-block__toggle--password')){
				$thBlock.addClass('pass-disable');
			}

			return false;
		},

		this.hideBlockForms = function() {
			$thisBlock = $(this).closest('.cabinet-block');
			$thisBlock
					.find('.cabinet-block__body')
					.addClass('hidden');
			
			if($thisBlock.hasClass('pass-disable')){
				$thisBlock.removeClass('pass-disable');
			}
			
			return false;
		},

		this.toggleManagers = function() {

			var $th = $(this),
				$managersCollection = $th.closest('.hidden-managers-container')
									.find('.manager, .managers'),
				thText = $th.text();

			$managersCollection.each(function(ind, elem) {
				var $th = $(elem);
				$th.hasClass('hidden') ? $th.removeClass('hidden') : $th.addClass('hidden');
				// console.log(elem);
			});

			$th.text(_self.toogleButtonText(thText));

			return false;
		},

		this.toogleButtonText = function(string) {
			var newString;

			string == 'все менеджеры' ? newString = "мой менеджер" : newString = "все менеджеры";
			return newString;
		}
	}

	var cab = new Cabinet();
	cab.init();
	// end of cabinet


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {
	if($('.order-sidebar__to-fixed').length > 0 && screen.width > 780){
		var $sidebar = $('.order-sidebar__to-fixed'),
		sidebarTop = $sidebar.offset().top,
		sidebarHeight = $sidebar.height(),
		sidebarWidth = $sidebar.width(),
		footerTop = $('.footer').offset().top,
		heightSumm = sidebarHeight + footerTop,
		sidebarLeft = $sidebar.offset().left;
	
		$(document).scroll(function() {
				
			if($(this).scrollTop() > sidebarTop){
				$sidebar.addClass('sidebar-fixed');
				$sidebar.css('left', sidebarLeft - 15);
			}else{
				
				$sidebar.removeClass('sidebar-fixed');
				$sidebar.css('left', 'auto');
			}

		});
	}
	
});
