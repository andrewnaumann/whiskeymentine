
/* jslint browser: true *//* global $ */

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
  
  // Init Unveil
  $('img').unveil(200);
  
  
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
    }, 500);
  }
  
  $('#profile').on('click', function(event) {
    event.preventDefault();
    $('#modal-content').load('profile.html');
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