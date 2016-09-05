$(document).ready(function(){
     $(".filter").click(function(){
         $("." + $(this)[0].id).toggle(this.checked);
     });
});
