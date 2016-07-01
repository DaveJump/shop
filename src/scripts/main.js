$(function(){
  $(".banner-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 600
  });

  $(".best-sales-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    smartSpeed: 600,
    responsive:{
      0:{
        items: 1
      },
      769:{
        items: 2
      },
      993:{
        items: 3
      }
    }
  });

  $('.nav-icon-button').click(function(e){
    $('.nav-main').slideToggle(300);

    e.stopPropagation();
    e.preventDefault();
  });
});
