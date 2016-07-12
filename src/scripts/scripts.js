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

});

