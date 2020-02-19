$(document).ready(function(){

    $(".form-registro").hide();

   $(".btn-inicio").click(function(){
       $(".form-registro").hide("linear");
       $(".form-inicio").show("swing");
   });

   $(".btn-registro").click(function(){
    $(".form-inicio").hide("linear");
    $(".form-registro").show("swing");
   });

   $(".reg").click(function(){
    $(".form-inicio").hide("linear");
    $(".form-registro").show("swing");
   })
})