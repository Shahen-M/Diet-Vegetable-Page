
 document.getElementById('menu').addEventListener('click', function() {
   let hamburger = document.querySelector(".hamburger");
   hamburger.classList.toggle("is-active");

   $('#nav').toggleClass('nav_slide_left_animation');
   $('body').toggleClass('body_overflow');
 })

$(window).on('scroll', function() {
  if($(window).scrollTop() > 200) {
    $('header').addClass('header_scroll_animation');
  } else {
    $('header').removeClass();
  }
})
























/* */
