$(document).ready(function() {
    $('.A1').click(function(event) {
        $('.M1').show();
        $('.M2').hide();
        $('.M3').hide();
        $('.M4').hide();
        $('.M5').hide();
        $('.M6').hide();
        $('.M7').hide();
        $('.M8').hide();
    });
    $('.A2').click(function(event) {
        $('.M1').hide();
        $('.M2').show();
        $('.M3').hide();
        $('.M4').hide();
        $('.M5').hide();
        $('.M6').hide();
        $('.M7').hide();
        $('.M8').hide();
      });
      $('.A3').click(function(event) {
        $('.M1').hide();
        $('.M2').hide();
        $('.M3').show();
        $('.M4').hide();
        $('.M5').hide();
        $('.M6').hide();
        $('.M7').hide();
        $('.M8').hide();
      });
      $('.A4').click(function(event) {
        $('.M1').hide();
        $('.M2').hide();
        $('.M3').hide();
        $('.M4').show();
        $('.M5').hide();
        $('.M6').hide();
        $('.M7').hide();
        $('.M8').hide();
      });
      $('.A5').click(function(event) {
        $('.M1').hide();
        $('.M2').hide();
        $('.M3').hide();
        $('.M4').hide();
        $('.M5').show();
        $('.M6').hide();
        $('.M7').hide();
        $('.M8').hide();
      });
      $('.A6').click(function(event) {
        $('.M1').hide();
        $('.M2').hide();
        $('.M3').hide();
        $('.M4').hide();
        $('.M5').hide();
        $('.M6').show();
        $('.M7').hide();
        $('.M8').hide();
      });
      $('.A7').click(function(event) {
        $('.M1').hide();
        $('.M2').hide();
        $('.M3').hide();
        $('.M4').hide();
        $('.M5').hide();
        $('.M6').hide();
        $('.M7').show();
        $('.M8').hide();
      });
      $('.A8').click(function(event) {
        $('.M1').hide();
        $('.M2').hide();
        $('.M3').hide();
        $('.M4').hide();
        $('.M5').hide();
        $('.M6').hide();
        $('.M7').hide();
        $('.M8').show();
      });
      $('.menu-2').click(function(event){
        event.preventDefault();
        $('.dropdown2 ').slideToggle(600);
      });
      $('.menu-3').click(function(event){
        event.preventDefault();
        $('.dropdown3 ').slideToggle(600);
      });
  });