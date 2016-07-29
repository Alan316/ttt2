/* Modals */
$(document).ready(function(){
 $(".Trailer1").click(function(){
     $('#Modal1').modal('show');
 });

$('#Modal1').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
 });


 $(".Trailer2").click(function(){
     $('#Modal2').modal('show');
 });

 $('#Modal2').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
 });


 $(".Trailer3").click(function(){
     $('#Modal3').modal('show');
 });

 $('#Modal3').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
 });

 $(".TrailerReview1").click(function(){
     $('#ModalReview1').modal('show');
 });

$('#ModalReview1').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
 });

});

/*Logo Fade In*/
$(function() {

  $(window).scroll(function() {
    var x = $(window).scrollTop();


    if (x >= 600) {
      $(".navbarLogo").fadeIn();
    } else {
      $(".navbarLogo").fadeOut();
    }

  });

});

/*Cosplay Image Randomizer*/
(function(){
    var images = ['tekken_cosplay_1.jpg', 'tekken_cosplay_2.jpg', 'tekken_cosplay_3.jpg', 'tekken_cosplay_4.jpg', 'tekken_cosplay_5.jpg'];
    $('.cosplayFeature').css({'background-image': 'url(images/cosplay/' + images[Math.floor(Math.random() * images.length)] + ')'});
  })();


$(function() {
   $( "#upBtn" ).click(function(){
    $('#scroll').scrollTop($('#scroll').scrollTop()-100);
    /*$("#scroll").animate({ scrollTop:  $("#scroll").scrollTop() -  "100px" });*/
}); 


 $( "#downBtn" ).click(function(){
    $('#scroll').scrollTop($('#scroll').scrollTop()+100);
     /*$("#scroll").animate({ scrollTop:  $("#scroll").scrollTop() +  "100px" });*/
});

});