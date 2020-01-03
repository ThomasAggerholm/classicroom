//Currency Formatting
function formatMoney(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
      formatString = format || '${{amount}}';

  function defaultTo(value, defaultValue) {
    return value == null || value !== value ? defaultValue : value;
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultTo(precision, 2);
    thousands = defaultTo(thousands, ',');
    decimal = defaultTo(decimal, '.');

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    var parts = number.split('.'),
        dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        centsAmount = parts[1] ? decimal + parts[1] : '';

    return dollarsAmount + centsAmount;
  }

  var value = '';

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_space_separator':
      value = formatWithDelimiters(cents, 2, ' ', '.');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, ',', '.');
      break;
    case 'amount_no_decimals_with_space_separator':
      value = formatWithDelimiters(cents, 0, ' ');
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
  }

  if (formatString.indexOf('with_comma_separator') !== -1) {
    return formatString.replace(placeholderRegex, value).replace(',00', '');
  } else {
    return formatString.replace(placeholderRegex, value).replace('.00', '');
  }
}




//-------Animations Frontpage-----------//
var controller = new ScrollMagic.Controller();

tl = new TimelineMax();

tl.to('.hero__content__title', .8, {
  y: 0, 
  opacity: 1,
  ease: Power2.easeOut,
  delay: .5
});

tl.to('.hero-btn-anim', .8, {
  y: 0,
  ease: Power2.easeOut,
  opacity: 1
}, "-=.6");

tl.to('.hero__slider', 1, {
  y: 0,
  ease: Power2.easeOut,
  opacity: 1
}, "-=.6");

tl.to('.hero__slider__controls-wrapper', .8, {
  opacity: 1,
  ease: Power2.easeOut,
  y: 0
}, "-=.8");

tl.to('.bestseller-inner', .8, {
  y: 0,
  ease: Power2.easeOut,
  opacity: 1
}, "-=.6");

//Collection Grid Fadein
collectionGrid = new TimelineMax();

collectionGrid.from('.collection-grid__title', 1.5, {
  y: 20,
  ease: Power2.easeOut,
  opacity: 0
});

collectionGrid.from('.collection-grid__grid', 1.2, {
  y: 40,
  ease: Power2.easeOut,
  opacity: 0
});

var scene = new ScrollMagic.Scene({
  triggerElement: '#collection-grid',
  triggerHook: 'onEnter'
})
    .setTween(collectionGrid)
    .addTo(controller);

//Product Slider Fadein
productSlider = new TimelineMax();

productSlider.from('.product-slider__inner', 1, {
  y: 20,
  ease: Power2.easeOut,
  opacity: 0,
  delay: .5
});

productSlider.from('.product-slider__wrapper', 1, {
  y: 20,
  ease: Power2.easeOut,
  opacity: 0
});

var scene = new ScrollMagic.Scene({
  triggerElement: '#product-slider',
  triggerHook: 'onEnter'
})
    .setTween(productSlider)
    .addTo(controller);


//-------Animations Global Sections-----------//

//Newsletter Fadein
newsletterAnim = new TimelineMax();

newsletterAnim.from('.newsletter__image', 1, {
  y: 20,
  ease: Power2.easeOut,
  opacity: 0,
  delay: .5
});

newsletterAnim.from('.newsletter__info__text', .8, {
  x: 20,
  ease: Power2.easeOut,
  opacity: 0
});

newsletterAnim.from('.newsletter__info__form', .8, {
  x: 20,
  ease: Power2.easeOut,
  opacity: 0
}, "-=.4");

var scene = new ScrollMagic.Scene({
  triggerElement: '#newsletter',
  triggerHook: 'onEnter'
})
    .setTween(newsletterAnim)
    .addTo(controller);

//Trustpilot Fadein
trustpilotAnim = new TimelineMax();

trustpilotAnim.from('.trustpilot__title', 1, {
y: 20,
ease: Power2.easeOut,
opacity: 0,
delay: .5
});

trustpilotAnim.from('.trustpilot-slider__wrapper', 1, {
y: 20,
ease: Power2.easeOut,
opacity: 0
});

var scene = new ScrollMagic.Scene({
triggerElement: '#trustpilot',
triggerHook: 'onEnter'
})
  .setTween(trustpilotAnim)
  .addTo(controller);

//Footer Fadein
footerAnim = new TimelineMax();

footerAnim.from('.footer__inner__info', 1, {
y: 20,
ease: Power2.easeOut,
opacity: 0,
delay: .5
});

var scene = new ScrollMagic.Scene({
triggerElement: '#footer',
triggerHook: 'onEnter'
})
  .setTween(footerAnim)
  .addTo(controller);


//-------Animations Product Page-----------//
productTop = new TimelineMax();

productTop.to('.product-image', 1, {
y: 0,
opacity: 1,
ease: Power2.easeOut
});

productTop.to('.product-info', 1, {
y: 0,
opacity: 1,
ease: Power2.easeOut
}, "-=1");

//Product Description Fadein
productDesc = new TimelineMax();

productDesc.from('.product-description__inner', 1, {
y: 20,
ease: Power2.easeOut,
opacity: 0,
delay: .5
});

var scene = new ScrollMagic.Scene({
triggerElement: '.product-description',
triggerHook: 'onEnter'
})
  .setTween(productDesc)
  .addTo(controller);

//Product Bulletpoints Fadein
productBullet = new TimelineMax();

productBullet.from('.product-bulletpoints__image', 1, {
y: 20,
ease: Power2.easeOut,
opacity: 0
});

productBullet.from('.product-bulletpoints__bulletpoints', 1, {
y: 20,
ease: Power2.easeOut,
opacity: 0
}, "-=.6");

var scene = new ScrollMagic.Scene({
triggerElement: '.product-bulletpoints__inner',
triggerHook: 'onCenter'
})
  .setTween(productBullet)
  .addTo(controller);

//Product Recommended Products Fadein
recommendedProd = new TimelineMax();

recommendedProd.from('.recommended-products__title', 1, {
y: 20,
ease: Power2.easeOut,
opacity: 0
});

var scene = new ScrollMagic.Scene({
triggerElement: '#recommended-products',
triggerHook: 'onEnter'
})
  .setTween(recommendedProd)
  .addTo(controller);


//-------Animations Collection Page-----------//
var collectionAnim = new TimelineMax();

collectionAnim.to('.collection__products', .8, { opacity: 1, y: 0 });



//-------Animations Cart Page-----------//

//Product Sales Slider Section
var cartAnim = new TimelineMax();

cartAnim.to('.cart__title', 1, { opacity: 1, y: 0});
cartAnim.to('.cart__line-items', 1, { opacity: 1, y: 0}, "-=.8");
cartAnim.to('.cart__total', 1, { opacity: 1, y: 0}, "-=.8");
cartAnim.to('.cart__payment-cards', 1, { opacity: 1, y: 0}, "-=.8");

var sales = new TimelineMax();

sales.from('.cart-sales-slider__title h1', .8, { opacity: 0, y: 20, delay: 0.5 });
sales.from('.cart-sales-slider__controls', 1, { opacity: 0, y: 20}, "-=.5");
sales.from('.cart-sales-slider__wrapper', 1, { opacity: 0, y: 20}, "-=.5");

var scene = new ScrollMagic.Scene({
  triggerElement: '.cart-sales-slider__inner',
  triggerHook: 'onEnter'
  })
    .setTween(sales)
    .addTo(controller);


//-------Animations Contact Page-----------//
var contactAnim = new TimelineMax();
var contactHeaderAnim = new TimelineMax();
var $toggleItem = $('.faq-toggle__item');

contactHeaderAnim.to('.contact-header__info', .6, {opacity: 1, y: 0});
contactHeaderAnim.to('.contact-header__image', .6, {opacity: 1, y: 0}, "-=.4");

//FAQ Toggles Animation
contactAnim.to('.faq__title', .8, {opacity: 1, y: 0});

$toggleItem.each(function(){
  contactAnim.to(this, .4, {opacity: 1, y: 0}, "-=.2");
});

var contactScene = new ScrollMagic.Scene({
  triggerElement: '.faq-toggle__wrapper',
  triggerHook: 'onEnter'
})
  .setTween(contactAnim)
  .addTo(controller);

//Contact Form Animation
var contactFormAnim = new TimelineMax();

contactFormAnim.to('.contact-form__title .h1', .8, {opacity: 1, y: 0});
contactFormAnim.to('.contact-form__inner', .8, {opacity: 1, y: 0}, "-=.6");


var ContactAnimScene = new ScrollMagic.Scene({
  triggerElement: '.contact-form__title',
  triggerHook: 'onCenter'
})
  .setTween(contactFormAnim)
  .addTo(controller);



//-------Animations Collection List Page-----------//
var listCollectonAnim = new TimelineMax();

listCollectonAnim.to('.collection-list__title', .8, {opacity: 1, y: 0});
listCollectonAnim.to('.collection-list__collections-wrapper', .8, {opacity: 1, y: 0}, "-=.6");



//-------Animations Brands Page-----------//
var brandAnim = new TimelineMax();

brandAnim.to('.brands__title', .8, {opacity: 1, y: 0});
brandAnim.to('.brands__brand-wrapper', .8, {opacity: 1, y: 0}, "-=.6");



//-------Animations 404 Page-----------//
var page404Anim = new TimelineMax();

page404Anim.to('.page404__text-bg', 1.2, {opacity: .1, y: 0});
page404Anim.to('.page404__title', .8, {opacity: 1, y: 0}, "-=.8");
page404Anim.to('.page404__description', .8, {opacity: 1, y: 0}, "-=.6");
page404Anim.to('.page404-btn', .8, {opacity: 1, y: 0}, "-=.6");
page404Anim.to('.page404__image', .8, {opacity: 1, y: 0}, "-=.8");






//-------Document Ready-----------//
$(document).ready(function(){

    
  

  //Header Scroll Function
  let
    header = $('#header'),
    aboutNav = $('.header__about-nav'),
    search = $('.search-form'),
    headerGrid = $('.header__grid'),
    collectNav = $('.header__collection-nav'),
    megamenu = $('.child-linklist__wrapper');

  $(window).scroll(function() {
    if (header.offset().top >= 55) {
      header.addClass('scroll');
      aboutNav.addClass('scroll');
      search.addClass('scroll');
      headerGrid.addClass('scroll');
      collectNav.addClass('scroll');
      megamenu.addClass('scroll');
    } else if (header.offset().top <= 55) {
      header.removeClass('scroll');
      aboutNav.removeClass('scroll');
      search.removeClass('scroll');
      headerGrid.removeClass('scroll');
      collectNav.removeClass('scroll');
      megamenu.removeClass('scroll');
    }
  });

  //Topbar
  function topbarEnabled(){
    if ($('#header').hasClass('topbar-enabled')) {
      $('body').addClass('topbar-enabled')
    } else {
      $('body').removeClass('topbar-enabled')
    }
  }

  topbarEnabled();

  //Topbar USP slider
  if ($('.topbar-slider').length > 0) {
    $('.topbar-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      prevArrow: '.top-bar-slider-prev',
      nextArrow: '.top-bar-slider-next',
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 4000
    });
  }


  //Prevent default on Brand submenus
  const linkItem = $('.header__collection-nav .linklist__item:nth-of-type(2) .child-linklist__item-link');

  linkItem.click(function (event) {
    event.preventDefault();
  })

  //Mobile Menu Toggle
  let
    $burger = $('.mobile-header__menu-icon'),
    $mobileHeader = $('.mobile-header'),
    $mobileMenu = $('.mobile-header__menu-wrapper'),
    $mobileLink = $('.mobile-linklist__item-link'),
    $mobileChildLink = $('.mobile-child-linklist__item-link'),
    $mobileChildMenu = $('.mobile-child-linklist__wrapper'),
    $mobileGrandchildMenu = $('.mobile-grandchild-linklist__wrapper');

  iconAnim = new TimelineMax({paused: true, reversed: true});

  iconAnim.to('#line_1', .2, {y: 63.5, ease: Power2.easeOut});
  iconAnim.to('#line_2', .2, {y: 63.5, ease: Power2.easeOut}, "-=.2");
  iconAnim.to('#line_1', .2, {rotation: 45, transformOrigin: "center center", ease: Power2.easeOut});
  iconAnim.to('#line_2', .2, {rotation: -45, transformOrigin: "center center", ease: Power2.easeOut}, "-=.2");

  $burger.click(function(){
    $('body').toggleClass('no-scroll');
    $mobileMenu.toggleClass('open');
    $mobileHeader.toggleClass('open');
    $('.mobile-header__menu-icon .burger-icon').toggleClass('open');
    $('.mobile-header__menu-icon .close-icon').toggleClass('open');
    $('.mobile-linklist__item').addClass('link-animation');
    iconAnim.reversed() ? iconAnim.play() : iconAnim.reverse();
  });

  //Toggle Childlist
  $mobileLink.click(function(e){
    if ($(this).parent().hasClass('has-child-list')) {
      e.preventDefault();
    }

    $(this).find('.open-icon').toggleClass('open');
    $(this).siblings($mobileChildMenu).slideToggle(300);
    $(this).parent().siblings().toggleClass('inactive');
    $('.mobile-child-linklist__item').addClass('link-animation');    
  });

  //Toggle Crandchildlist
  $mobileChildLink.click(function(e){
    let ww = $(window).width();

    $(this).find('.open-icon').toggleClass('open');
    $(this).toggleClass('open');
    $(this).siblings($mobileGrandchildMenu).slideToggle(300);
    $(this).parent().siblings().toggleClass('inactive');
    $('.mobile-grandchild-linklist').addClass('link-animation');

    if($(this).hasClass('has-child-list') && ww < 900) {
      e.preventDefault();
    }
  });


  //Brands megamenu justify-content with more than 10 link-items
  if($('.linklist__item:nth-of-type(2) .child-linklist__item').length > 10) {
    $('.linklist__item:nth-of-type(2) .child-linklist').css('justifyContent', 'flex-start');
  }


  //Hero Slider
  if ($('.hero__slider').length > 0) {
    $('.hero__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        loop: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        dots: true,
        appendDots: '.hero__slider__pagination',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    $('.hero__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      let $pagination = $('.hero__slider__current-slide');
      let curPage = currentSlide+1;
      $pagination.text(((curPage < 10) ? "0" + curPage : curPage));
    });
  }

  //Product Slider on Frontpage
  if ($('.product-slider').length > 0) {
    $('.product-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '.prod-slider-prev',
      nextArrow: '.prod-slider-next',
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  
  //Trustpilot Slider on Frontpage
  if ($('.trustpilot-slider').length > 0) {
    $('.trustpilot-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      loop: true,
      prevArrow: '.trustpilot__controls .prev',
      nextArrow: '.trustpilot__controls .next',
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  //Product Featured Image Zoom
  var products = document.querySelectorAll('.featured-image__wrapper');
  var ww = $(window).width();

  products.forEach(function(product){
    var href = product.querySelector('img').getAttribute('data-image');
    
    if (ww < 900) {
      $(product).trigger('zoom.destroy');
    } else {
      $(product).zoom({url: href})
    }
  })

  //Product Thumbnails
  $('.product-image__featured').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.thumbnail-slider',
    fade: true,
    arrows: false,
    centerMode: true,
    adaptiveHeight: true
  });

  $('.thumbnail-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-image__featured',
    focusOnSelect: true,
    arrows: false,
    touchMove: false,
    infinite: false
  });

  //Product color swatch active
  let = colorSwatch = $('.color-swatch-label');

  colorSwatch.click(function() {
    $(this).addClass('active');
    $(this).siblings(colorSwatch).removeClass('active');
  });

  //Ajax the add to cart
  function addToCartAjax(event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: $(this).serialize(),
      success: onSuccess,
      error: onError
    });
  }

  function onSuccess() {
    
    $.ajax({
      type: 'GET',
      url: '/cart',
      context: document.body,
      success: function(context) {
          let 
              $dataCartContents = $(context).find('.js-mini-cart-page-contents'),
              dataCartHtml = $dataCartContents.html(),
              dataCartItemCount = $dataCartContents.attr('data-cart-item-count'),
              $cartItemCount = $('.header__cart-count'),
              $popupUpdatedCount = $('.popup__updated-count'),
              $updatedCount = $('#Quantity'),
              updatedCountQuantity = parseInt($updatedCount.val()),
              $miniCartContent = $('.js-mini-cart-page-contents'),
              $addToCartButton = $('#add-to-cart-button');
              
          
          $addToCartButton.prop('disabled', true);
          $('.add-to-cart-text').hide();
          $('.adding-to-cart-text').show();
          setTimeout(function() {
            $addToCartButton.prop('disabled', false);
            $('.adding-to-cart-text').hide();
            $('.added-button').show()

            setTimeout(function() {
              $('.added-button').hide();
              $('.add-to-cart-text').show();
              $cartItemCount.addClass('animatedBounce');
            }, 1000);
              
          
          }, 1000);

          $cartItemCount.text(dataCartItemCount);
          $cartItemCount.removeClass('cart-count-hidden');
          $popupUpdatedCount.text('(' + dataCartItemCount + ')');
          $('.updated-count').text(updatedCountQuantity);
          $miniCartContent.html(dataCartHtml);
      }
  });
  }

  function onError(XMLHttpRequest) {
    $('.max-quantity-popup').addClass('active');
  }

  //Remove max quantity popup
  $('.max-quantity-popup__button').click(function(){
    $('.max-quantity-popup').removeClass('active');
  });

  $(document).on('submit', '#add-to-cart-form', addToCartAjax);

  //Open Mini-Cart on Cart Icon
  $cartIcon = $('.header__cart-icon');

  $cartIcon.on('mouseenter', function() {
    $('.feedback-popup').slideDown(300);
  });

  $('.feedback-popup').on('mouseleave', function() {
    $(this).slideUp(300);
  });

  //Close Mini-Cart
  $miniCart = $('.feedback-popup');

  $(document).mouseup(function(e) {
    if (!$miniCart.is(e.target) // if the target of the click isn't the container...
    && $miniCart.has(e.target).length === 0
    && !$cartIcon.is(e.target)
    && $cartIcon.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $miniCart.slideUp(300);
   }
  });


  //Add to Cart Form
  let
    addToCartFormSelector = '#add-to-cart-form',
    productOptionSelector = addToCartFormSelector + ' [name*=option]';

  let productForm = {
    onProductOptionChanged: function(event) {
      let
        $form = $(this).closest(addToCartFormSelector),
        selectedVariant = productForm.getActiveVariant($form);

      $form.trigger('form:change', [selectedVariant]);
    },
    getActiveVariant: function($form) {
      let
        variants = JSON.parse(decodeURIComponent($form.attr('data-variants'))),
        formData = $form.serializeArray(),
        formOptions = {
          option1: null,
          option2: null,
          option3: null
        },
        selectedVariant = null;

      $.each(formData, function(index, item){
        if(item.name.indexOf('option') !== -1) {
          formOptions[item.name] = item.value;
        }
      });

      $.each(variants, function(index, variant){
        if (variant.option1 === formOptions.option1 && variant.option2 === formOptions.option2 && variant.option3 === formOptions.option3) {
          selectedVariant = variant;
          return false;
        }
      });

      return selectedVariant;

    },
    validate: function(event, selectedVariant) {
      let
        $form = $(this),
        hasVariant = selectedVariant !== null,
        canAddToCart = hasVariant && selectedVariant.inventory_quantity > 0,
        $id = $form.find('.js-variant-id'),
        $addToCartButton = $form.find('#add-to-cart-button'),
        $price = $('.js-price'),
        $compareAtPrice = $('.product-info__compare_at_price');

      if (selectedVariant.featured_image != null) {
        $('.product-image__featured').slick('slickGoTo', $('.featured-image__wrapper[data-image-variant-id="' + selectedVariant.featured_image.id + '"]').closest('.slick-slide').attr('data-slick-index'), false);
      }

      if (canAddToCart) {
        $id.val(selectedVariant.id);
        $addToCartButton.prop('disabled', false);
        // $addToCartButton.text(theme.strings.addToCart);
      } else {
        $id.val('');
        $addToCartButton.prop('disabled', true);
        // $addToCartButton.text(theme.strings.unavailable);
      }

      window.history.replaceState(null, null, '?variant='+selectedVariant.id);
      $price.html(formatMoney(selectedVariant.price, window.theme.moneyFormat));
      $compareAtPrice.html(formatMoney(selectedVariant.compare_at_price, window.theme.moneyFormat));

    },
    init: function() {
      $(document).on('change', productOptionSelector, productForm.onProductOptionChanged);
      $(document).on('form:change', addToCartFormSelector, productForm.validate);
    }
  }; 

  productForm.init();

  
  //Collection Page Filter Toggles
  let
    $toggleButton = $('.collection__filtering-title'),
    $buttonArrow = $('.collection__filtering-title span'),
    $toggleContainer = $('.collection__filtering__toggle-container');
  
  $toggleButton.click(function(){
    $(this).find($buttonArrow).toggleClass('active');
    $(this).siblings($toggleContainer).slideToggle(300);
  });

  //Collection Page Sort By
  $('#navbarDropdown').click(function(e) {
    e.preventDefault();
    $(this).find('span').toggleClass('active');
    $(this).siblings('.dropdown-menu').slideToggle(300);
  })

  $('#sortBy .dropdown-menu a').click(function(){
    var params = new URLSearchParams(location.search);
    params.set('sort_by', $(this).parent().attr('value'));
    window.location = (location.pathname + '?' + params.toString());
  });

  //Mobile filter toggle
  let
    $toggle = $('.mobile-filter-toggle'),
    $filterSection = $('.collection__filtering-section'),
    $filterIcon = $toggle.find($('.open-icon')),
    $overlay = $('.color-overlay');

  $toggle.click(function() {
    $filterIcon.toggleClass('open');
    $(this).toggleClass('open');
    $filterSection.slideToggle(300);
    $overlay.toggleClass('active');
  })


  //Infinite Scroll on Collection Page
  $('.collection__product-grid').infiniteScroll({
    // options
    path: '#more',
    append: '.product-card',
    history: 'replace',
    loadOnScroll: true
  });
    
  $(document).on('click', '#more', function(e){
    e.preventDefault()
    $('.collection__product-grid').infiniteScroll('loadNextPage');
    $(this).html('Indlæser...')
  })
    
  $('.collection__product-grid').on( 'load.infiniteScroll', function( event, response, path ) {
    
    $('.js-loadmore').remove()
    $('.js-loadmore-wrapper').html($(response).find('.js-loadmore'))
  });


  //Accept terms & conditions on cart page
  $('#checkout-button').click(function(e) {
    if ($('#agree').is(':checked')) {
      $(this).submit();
    } else {
      e.preventDefault();
      $('#terms-popup').addClass('active');
    }
  });

  //Remove popup
  $('.terms-popup__button').click(function(){
    $('#terms-popup').removeClass('active');
  });


  //Cart Page Sales Slider
  if ($('.cart-sales-slider').length > 0) {
    $('.cart-sales-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      inifite: false,
      prevArrow: '.cart-slider-prev',
      nextArrow: '.cart-slider-next',
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }



  //Change quantity on Cart Line Item
  let
    $plusButton = $('.cart-quantity__plus'),
    $minusButton = $('.cart-quantity__minus');
  

  $plusButton.click(function(e){    
    if (parseInt($(this).siblings('.data-quantity').val()) < parseInt($(this).siblings('.data-quantity').attr('data-max-quantity'))) {
      $(this).parent().find('.data-quantity').val(parseInt($(this).siblings('.data-quantity').val()) + 1);
    } else {
      e.preventDefault();
      $('.max-quantity-popup').addClass('active');
    }
  });

  //Remove max quantity popup
  $('.max-quantity-popup__button').click(function(){
    $('.max-quantity-popup').removeClass('active');
  });

  $minusButton.click(function(){
    $(this).parent().find('.data-quantity').val(parseInt($(this).siblings('.data-quantity').val()) - 1);
  });

  


  //VAT toggle on cart page
  let
    incl = $('.vat-toggles__button.incl-vat'),
    excl = $('.vat-toggles__button.excl-vat'),
    totalPriceIncl = $('.total__price.incl_vat'),
    totalPriceExcl = $('.total__price.excl_vat');

  incl.click(function() {
    $(this).addClass('active');
    excl.removeClass('active');
    totalPriceIncl.addClass('active');
    totalPriceExcl.removeClass('active');
  });

  excl.click(function() {
    $(this).addClass('active');
    incl.removeClass('active');
    totalPriceExcl.addClass('active');
    totalPriceIncl.removeClass('active');
  });


  // FAQ
  $('.faq-toggle__item__header').click(function() {
    var toggleIcon = $(this).find('#line-1');
    $(this).siblings('.faq__answer__wrapper').slideToggle(300);
    toggleIcon.toggleClass('open');
    if (toggleIcon.hasClass('open')) {
      TweenMax.to(toggleIcon, .3, {rotation: 0, transformOrigin: "center center", ease: Power4.easeOut});
    } else {
      TweenMax.to(toggleIcon, .3, {rotation: 90, transformOrigin: "center center", ease: Power4.easeOut});
    }
  });


  //Scroll-To-Top
  $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
          $('#backToTop').fadeIn('slow');
      } else {
          $('#backToTop').fadeOut('slow');
      }
  });
  $('#backToTop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
  });





});








          
        