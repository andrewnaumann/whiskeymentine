
/* jslint browser: true *//* global $ */

$(document).ready(function() {
  
//  Modal stuff
  var body = $('body'),
    close_modal = $('.close-modal'),
    modal_container = $('.modal-container'),
    toggleModal = function() {
        body.toggleClass('body-locked');
        modal_container.toggleClass('dp-block');
    };
  
  function openModal(modal) {
    var pageHeight = $(window).height();
    modal.css({top: pageHeight});
    modal.animate({
      top: 0
    }, 500, function(){
      $(".mobile-header select option[value=all]").attr('selected', true);
    });
  }
  
  $('#studio').on('click', function(event) {
    event.preventDefault();
    $('#modal-content').load('studio.html');
    toggleModal();
    openModal($('.modal-container'));
  });
  
  $('#contact').on('click', function(event) {
    event.preventDefault();
    $('.modal').addClass("contact-modal");
    $('#modal-content').load('contact.html');
    toggleModal();
    openModal($('.modal-container'));
  });
  
  $('.works-gallery a').on('click', function(event){
    event.preventDefault();
    $('#modal-content').load($(this).attr('href'));
    toggleModal();
    openModal($('.modal-container'));
  });
  
  $(".mobile-header select").on("change", function() {
    var pageToLoad = $(this).val() + '.html';
    if (pageToLoad === "contact.html") {
      $('.modal').addClass("contact-modal");
    }
    $('#modal-content').load(pageToLoad);
    toggleModal();
    openModal($('.modal-container'));
  }); 
  
  close_modal.click(function(event){
    event.preventDefault();
    var pageHeight = $(window).height();
    $('.modal-container').animate({
      scrollTop: 0,
      top: pageHeight
    }, 500, function() {
      toggleModal();
      $('.modal').removeClass('contact-modal');
    });
  });
  

});