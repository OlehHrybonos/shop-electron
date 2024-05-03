'use strict';

$(function() {

  $('.open-search-button').click(function(e) {
    e.preventDefault();
    if ($('#search').length) {
      $('#search').addClass('active');
    }
  });

  function handleScroll() {
    if ($(window).scrollTop() > 200) {
      $topButton.fadeIn();
    } else {
      $topButton.fadeOut();
    }
  }

  $('#top').click(function(){
  	$('body, html').animate({scrollTop: 0}, 700)
  });

  $(window).scroll(handleScroll);

  $('.close-search').click(function() {
    $('#search').removeClass('active');
    handleScroll();
  });

  var $topButton = $('#top');

$(document).ready(function() {
  $('.sidebar-toggler .btn').click(function(event) {
    event.preventDefault();
    $('.sidebar-toggle').slideToggle();
  });
});

});



