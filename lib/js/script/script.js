$('document').ready(function(){
  function aboutSplash(){
    $('.nav-link').click(function(){
      $('.footer-about p').animate({
        'font-size': '14px'
      });
      $('.footer-about').animate({
        'height': '120px'
      }, 300, function(){
        $('.nav-link').unbind( "click" );
        $('.footer-about-1').click(function(){
          $(this).animate({
            'height': '600px'
          }, 300, aboutSplash());
        });
      });
    });
  }
  aboutSplash();
  $('#text-editor').hallo({
    plugins: {
      'halloformat':
        {"bold": true, "italic": true, "strikethrough": true, "underline": false}
    }
  });
});
