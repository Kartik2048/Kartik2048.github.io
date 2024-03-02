$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  $(document).ready(function(){
    // Theme switch functionality
    $('#themeSwitch').change(function(){
      if ($(this).prop('checked')) {
        $('body').addClass('dark-theme');
      } else {
        $('body').removeClass('dark-theme');
      }
    });
  })


