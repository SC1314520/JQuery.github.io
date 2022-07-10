$(document).ready(function() {
    $('.L').click(function(event){
      event.preventDefault();
      $('.fed-middle-content h1').css("font-size","30px");
      $('.fed-middle-content p').css("font-size","20px");
      $('.fed-middle-content .p2').css("font-size","20px");
      $('.fed-middle-list').css("font-size","20px");
    });
    $('.M').click(function(event){
        event.preventDefault();
        $('.fed-middle-content h1').css("font-size","26px");
        $('.fed-middle-content p').css("font-size","16px");
        $('.fed-middle-content .p2').css("font-size","16px");
        $('.fed-middle-list').css("font-size","16px");
      });
      $('.S').click(function(event){
        event.preventDefault();
        $('.fed-middle-content h1').css("font-size","22px");
        $('.fed-middle-content p').css("font-size","12px");
        $('.fed-middle-content .p2').css("font-size","12px");
        $('.fed-middle-list').css("font-size","12px");
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