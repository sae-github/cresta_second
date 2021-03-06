jQuery(function () {
  jQuery('#js-hamburger').click(function () {
    jQuery('body').toggleClass('is-drawerActive')
    if (jQuery(this).attr('aria-expanded') == 'false') {
      jQuery(this).attr('aria-expanded', 'true')
      jQuery('#js-global-menu').attr('area-hidden', 'false')
    } else {
      jQuery(this).attr('aria-expanded', 'false')
      jQuery('#js-global-menu').attr('area-hidden', 'true')
    }
  });

  $('#js-slider').slick({
    autoplay: true,
    arrows: false,
    adaptiveHeight: false,
    fade: true,
    speed: 800,
  });

  jQuery('a[href^="#"]').click(function () {
    const header = jQuery(".l-header").innerHeight();
    const speed = 300;
    const id = jQuery(this).attr("href");
    const target = jQuery("#" == id ? "html" : id);
    const position = jQuery(target).offset().top - header;
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
  jQuery(window).on('scroll', function () {
    if (jQuery('.p-mv__slider').height() - 80 < jQuery(this).scrollTop()) {
      jQuery('.l-header').addClass('is-scrolled');
    }
    else {
      jQuery('.l-header').removeClass('is-scrolled');
    }
  });
});
