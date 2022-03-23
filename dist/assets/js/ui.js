"use strict";

var Common = {
  init: function init() {
    this.common();
  },
  common: function common() {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover"]').each(function (e) {
      // hide any open popovers when the anywhere else in the body is clicked
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $(this).popover('hide');
      }
    });
    $('.form-group > .group input.form-control').on('focus', function () {
      $(this).closest('.group').addClass('focused');
    }).on('blur', function () {
      $(this).closest('.group').removeClass('focused');
    });
  }
};
var Header = {
  init: function init() {
    this.scrolling();
    this.floatingMenu();
    window.addEventListener('mousewheel', Header.scrolling);
    window.addEventListener('touchmove', Header.scrolling);
    $(window).scroll(function () {
      Header.scrolling();
    });
    $(window).resize(function () {
      Header.scrolling();
    });
  },
  scrolling: function scrolling(e) {// var scrollTop = $(window).scrollTop();
    // var gnbTop = $('#header').height();
    // gnbTop = Number(gnbTop);
    // if(scrollTop > 0){
    // 	$('html').addClass('is-scrolled');
    // }else{
    // 	$('html').removeClass('is-scrolled');
    // }
    // if(scrollTop > 60){
    // 	$('html').addClass('header-fixed');
    // }else{
    // 	$('html').removeClass('header-fixed');
    // }
    // //scrollbar bottom check
    // if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
    // 	$('html').addClass('is-bottom');
    // }else{
    // 	$('html').removeClass('is-bottom');
    // }
  },
  floatingMenu: function floatingMenu() {
    $(document).on('click', '.float-menu a', function (e) {
      e.preventDefault();
      $(".floating-menu").toggleClass('opened');

      if ($(".floating-menu").hasClass("opened")) {
        $("html").addClass('is-opened-floatMenu');
      } else {
        $("html").removeClass('is-opened-floatMenu');
      }
    });
  }
};
$(function () {
  Header.init();
  Common.init();
});