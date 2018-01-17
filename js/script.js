
$(document).ready(function(){
   $(".abt-link").on("click" ,function(){
     scrolled=scrolled-300;
        $("#abtme").animate({
          scrollTop:  scrolled
     });
   });
   
   	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

