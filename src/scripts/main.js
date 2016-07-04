;(function(){

  $('.nav-icon-button').click(function(e){
    $('.nav-main').slideToggle(300);

    e.stopPropagation();
    e.preventDefault();
  });

  var pic_small = $('.pic-s');
  var pic_big = $('.pic-l').find('ul');

  pic_small.on('click','li',function(){
    $(this).siblings('li').removeClass('current');
    $(this).addClass('current');

    var index = $(this).index();

    pic_big.css({
      transform: 'translate3d(-'+ (index * 100) / 4 +'%,0,0)',
      webkitTransform: 'translate3d(-'+ (index * 100) / 4 +'%,0,0)'
    });
  });

})();
