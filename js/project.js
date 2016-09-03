$(document).ready(function(){
     $(".cite").mouseover(function(){
         $(this).find(".tooltip").stop(true);
         $(this).find(".tooltip").fadeIn('fast');
     });
     $(".cite").mouseleave(function() {
         $(this).find(".tooltip").stop(true);
         $(this).find(".tooltip").delay('slow').fadeOut('slow');
     });
     $('.tooltip').hide();
});
