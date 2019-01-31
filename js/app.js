$(function(){

  $(window).scroll(function() {
    var winTop = $(window).scrollTop();

    $(".anime-top").each(function(){
      var pos = $(this).offset().top;
        if (pos < winTop + 500) {
          $(this).addClass("slide-anime-top");
        }
    });

    $('.anime-scroll-bottom').each(function(){
      var pos = $(this).offset().top;
      if(pos <  winTop + 400 ){
         $(this).addClass('slide-anime-scroll-bottom');
      }
    });
  });
});