$(document).ready(function() {
  // burger-menu
  $('.burger-menu').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('offcanvas-show');
    $('.burger-menu span').toggle();
  });
  //logo animated
  $('.logo a').mouseover(function(e) {
    $(this).addClass('rubberBand');
  });
  $('.logo a').mouseleave(function(e) {
    $(this).removeClass('rubberBand');
  });
  //product-large
  $('.Large-1-link').click(function(e) {
    e.preventDefault();
    $('#large-1').show(1);
  })
  $('#large-1').click(function(e) {
    e.preventDefault();
    $(this).hide();
  })
  $('.Large-2-link').click(function(e) {
    e.preventDefault();
    $('#large-2').show(1);
  })
  $('#large-2').click(function(e) {
    e.preventDefault();
    $(this).hide();
  })
  $('.Large-3-link').click(function(e) {
    e.preventDefault();
    $('#large-3').show(1);
  })
  $('#large-3').click(function(e) {
    e.preventDefault();
    $(this).hide();
  })
  $('.Large-4-link').click(function(e) {
    e.preventDefault();
    $('#large-4').show(1);
  })
  $('#large-4').click(function(e) {
    e.preventDefault();
    $(this).hide();
  })
});
