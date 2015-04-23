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
    triggerElement: '.works-gallery',
    triggerHook: 'onLeave',
    duration: 0
  })
  .addTo(controller)
  .on('enter leave', function(event) {
    $('.side-bar nav').toggleClass('hidden');
  });
  
  


  
  $(".logo").click(function() {
    var pageHeight = $(window).height();
    $('html, body').animate({
      scrollTop: pageHeight
    }, 700);
  });

  

  
  
//  Modal stuff
  var body = $('body'),
    main = $('.main'),
    open_modal = $('.open-modal'),
    close_modal = $('.close-modal'),
    modal_container = $('.modal-container'),
    profile = $('#profile'),
    contact = $('#contact'),
    toggleModal = function() {
        body.toggleClass('body-locked');
        modal_container.toggleClass('dp-block');
    };
  
  profile.hide();
  contact.hide();
  
  function openModal(modal) {
    var pageHeight = $(window).height();
    modal.css({top: pageHeight})
    console.log("Open Modal Func pageHeight: " + pageHeight);
    modal.animate({
      top: 0
    }, 500);
  }
  
  open_modal.click(function(event){
    event.preventDefault();
    toggleModal();
    openModal($('.modal-container'));
    if ($(this).text() === "profile") {
      $('#profile').show();
    }
    if ($(this).text() === "contact") {
      $('#contact').show();
    }
  });
  
  close_modal.click(function(event){
    event.preventDefault();
    var pageHeight = $(window).height();
    console.log("Close Modal Func pageHeight: " + pageHeight);
    console.log(".modal-container Scroll Position: " + $('.modal-container').scrollTop());
    $('.modal-container').animate({
      scrollTop: 0,
      top: pageHeight
    }, 500, function() {
      toggleModal();
      profile.hide();
      contact.hide();
    });
  });
  

});