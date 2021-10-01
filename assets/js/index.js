"use strict";

// ドロワーメニュー
jQuery(function () {
  jQuery('#js-hamburger').click(function () {
    jQuery('body').toggleClass('is-drawerActive');
    if (jQuery(this).attr('aria-expanded') == 'false') {
      jQuery(this).attr('aria-expanded', 'true');
      jQuery('#js-global-menu').attr('area-hidden', 'false');
    } else {
      jQuery(this).attr('aria-expanded', 'false');
      jQuery('#js-global-menu').attr('area-hidden', 'true');
    }
  });

  // メインビューのスライダー
  $('#js-slider').slick({
    autoplay: true,
    arrows: false,
    adaptiveHeight: false,
    fade: true,
    speed: 800
  });

  // スムーススクロール
  jQuery('a[href^="#"]').click(function () {
    var header = jQuery(".l-header").innerHeight();
    var speed = 300;
    var id = jQuery(this).attr("href");
    var target = jQuery("#" == id ? "html" : id);
    var position = jQuery(target).offset().top - header;
    jQuery("html, body").animate({
      scrollTop: position
    }, speed);
    return false;
  });

  // メインビュー過ぎたら背景色つける
  jQuery(window).on('scroll', function () {
    if (jQuery('.p-mv__slider').height() - 80 < jQuery(this).scrollTop()) {
      jQuery('.l-header').addClass('is-scrolled');
    } else {
      jQuery('.l-header').removeClass('is-scrolled');
    }
  });
});
