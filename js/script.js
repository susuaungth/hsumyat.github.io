
$(document).ready(function(){
   $(".abt-link").on("click" ,function(){
     scrolled=scrolled-300;
        $("#abtme").animate({
          scrollTop:  scrolled
     });
   });
});

