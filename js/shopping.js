$(document).ready(function() {
  $('.A1').click(function(event) {
    $('.M4').show().siblings().hide();
  });
  $('.A2').click(function(event) {
    $('.M5').show().siblings().hide();
  });
  $('.A3').click(function(event) {
    $('.M6').show().siblings().hide();
  });
  $('.A4').click(function(event) {
    $('.M1').show().siblings().hide();
  });
  $('.A5').click(function(event) {
    $('.M2').show().siblings().hide();
  });
  $('.A6').click(function(event) {
    $('.M3').show().siblings().hide();
  });
  $('.A7').click(function(event) {
    $('.M7').show().siblings().hide();
  });
  $('.A8').click(function(event) {
    $('.M8').show().siblings().hide();
  });
      $('.menu-2>a').click(function(event){
        event.preventDefault();
        $('.dropdown2 ').slideToggle(400);
      });
      $('.menu-3>a').click(function(event){
        event.preventDefault();
        $('.dropdown3 ').slideToggle(400);
      });
  });