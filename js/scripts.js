$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 150) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

    
  });

  $(document).ready(function(){
    setTimeout(function(){
        $('.loader').fadeOut();
    },2000);
    
    var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});
})
