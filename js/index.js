$(document).ready(function() {
  $('.banner-all').hover(function(event){
    event.preventDefault();
    $('.banner-content').toggleClass("animate__zoomInDown");
  });
    $('.table').hover(function(event){
      event.preventDefault();
      $('.table').toggleClass("animate__pulse");
    });
    $('.list').hover(function(event){
      event.preventDefault();
      $('.list-h1').toggleClass("animate__tada");
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