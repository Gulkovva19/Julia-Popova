$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});

$(window).scroll(function() {
  var windowHeight = $(window).height();
  var scroll = $(window).scrollTop();
  if (scroll >= windowHeight) {
    $('._secondary').addClass('open');
   } else if ( $(this).scrollTop() <= windowHeight ) {
    $('._secondary').removeClass('open');
  }
});

$(window).scroll(function() {
  var windowHeight = $(window).height();
  var scroll = $(window).scrollTop();
  if (scroll >= windowHeight) {
    $('.header__container').addClass('_noborder');
   } else if ( $(this).scrollTop() <= windowHeight ) {
    $('.header__container').removeClass('_noborder');
  }
});

$(window).scroll(function() {
  var windowHeight = $(window).height();
  var scroll = $(window).scrollTop();
  if (scroll >= windowHeight) {
    $('.menu__link').addClass('_color-black');
   } else if ( $(this).scrollTop() <= windowHeight ) {
    $('.menu__link').removeClass('_color-black');
  }
});