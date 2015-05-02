
/* jslint browser: true *//* global $, ScrollMagic */

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
  
  // Init Unveil
  $('img').unveil(200);
  
  var controller = new ScrollMagic.Controller();
  
  // Animate Header
  new ScrollMagic.Scene({
    triggerElement: '.works-gallery',
    triggerHook: 'onEnter',
    duration: 500
  })
  .setTween('.logo', {top: '5%'})
  .addTo(controller);
  
  
  new ScrollMagic.Scene({
    triggerElement: '.works-gallery',
    triggerHook: 'onEnter',
    duration: 500
  })
  .setTween('.logo img', {width: '30%'})  
  .addTo(controller);
  
  new ScrollMagic.Scene({
    offset: computeScrollDistance(),
    triggerHook: 'onLeave',
    duration: 0
  })
  .addTo(controller)
  .on('enter leave', function() {
    $('.side-bar nav').toggleClass('hidden');
  });
  
  
  function computeScrollDistance() {
    var pageHeight = $(window).height();
    var logoHeight = $('.logo img').height();
    return pageHeight - logoHeight;
  }

  
  $(".logo").click(function() {
    if ($(document).scrollTop() === 0) {
      var scrollDistance = computeScrollDistance();
      $('html, body').animate({
        scrollTop: scrollDistance
      }, 700); 
    }
  });

  

  
  
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