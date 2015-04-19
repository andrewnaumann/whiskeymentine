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
      scrollTop: 700
    }, 700);
  });
  
  // Init Unveil
  $('img').unveil(200);
  
  
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
    });
  });
  

});