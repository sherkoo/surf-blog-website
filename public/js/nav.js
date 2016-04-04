$(document).ready(function(){

  $('.header-mobile-menu .close').hide();

  $('.header-mobile-menu .open').click(function(){
    $('.header-nav').show();
    $('.header-mobile-menu .open').hide();
    $('.header-mobile-menu .close').show();
  });

  $('.header-mobile-menu .close').click(function(){
    $('.header-nav').hide();
    $(this).hide();
    $('.header-mobile-menu .open').show();
  });

  // Banner message

  $('.banner-title').hide();
  $('.banner-title').fadeIn(400);


});
