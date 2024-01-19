//wait until document is ready/loaded to run jquery- safety net for best practice
$( document ).ready(function() {
  $(".burger-button").click(function(){
    $(this).toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });
});
