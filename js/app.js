// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
  //Init skrollr
  var s = skrollr.init({
    forceHeight: false
  });
  
  $(".logo").click(function() {
    $('html, body').animate({
      scrollTop: 550
    }, 500);
  });
  
  
//  Modal stuff
  var body = $('body'),
    main = $('.main'),
    open_modal = $('.open-modal'),
    close_modal = $('.close-modal'),
    modal_container = $('.modal-container'),
    toggleModal = function() {
        body.toggleClass('body-locked');
        modal_container.toggleClass('dp-block');
    };
  var pageHeight = body.height();
  
  function openModal(modal) {
    modal.css({top: pageHeight})
    modal.animate({
      top: 100
    }, 500);
  }
  
  open_modal.click(function(event){
    event.preventDefault();
    toggleModal();
    openModal($('.modal'));
  });
  
  close_modal.click(function(event){
    event.preventDefault();
    $('.modal').animate({
      top: pageHeight
    }, 500, function() {
      toggleModal();
    });
  });
  

});