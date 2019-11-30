// Гамбургер меню
$(document).ready(function () {
  var link = $('.menu-link');
  var link_active = $('.menu-link_active');
  var menu = $('.menu');
  var nav_link = $('.menu a');


  link.click(function () {
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu-active')

  });
  nav_link.click(function () {
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu-active');
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
  });
});

// Плавный скролл
$(document).ready(function () {
  var navbar_link = $('.navbar_list__link');
  navbar_link.click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
  });
});