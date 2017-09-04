
$(document).ready(function(){
  $(".abt-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.("#abt-me");

     $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){ 
        
        window.location.hash = hash;
      });
    } 
  });
});