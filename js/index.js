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
    $('.menu-2>a').click(function(event){
      event.preventDefault();
      $('.dropdown2 ').slideToggle(400);
    });
    $('.menu-3>a').click(function(event){
      event.preventDefault();
      $('.dropdown3 ').slideToggle(400);
    });

      $('.click-top').click(function(event) {
       event.preventDefault();
       $('html,body').animate({
         scrollTop: 0
       }, 1000);
      });
     
  });