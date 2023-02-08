$(document).ready(function () {

  //loading JS
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 1500);

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body, #').animate({
      scrollTop: 0
    }, 1000, 'easeInOutExpo');
    return false;
  });


  //AOS
  AOS.init();

});