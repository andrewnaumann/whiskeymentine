/* jslint browser: true *//* global $ */

$(document).ready(function() {
  
  var $body = $('body'),
      $modalContent = $('#modal-content'),
      $modalContainer = $('.modal-container'),
      $modal = $('.modal'),
      $modalBackground = $('.dismiss-target'),
      pageHeight = $(window).height();
  
  function openModal(modal) {
    // Get latest page Height
    pageHeight = $(window).height();
    // Set modal container's top to be just offscreen
    modal.css({top:pageHeight});
    $modal.css({marginBottom:pageHeight});
    // Display modal
    modal.toggleClass('dp-block');
    // Animate modal up to top of window
    modal.animate({
      top: 0
    }, 500, function(){
      // once animation has finished, calculate the total height and place a
      // click target below to dismiss modal when clicked outside
      $modalBackground.css({height:$modalContainer.prop('scrollHeight')});
    });
    // lock body from being able to scroll
    $body.toggleClass('body-locked');
  }
  
  function closeModal(modal) {
    // Animate down offscreen
    modal.animate({
      scrollTop: 0,
      top:pageHeight
    }, 500, function() {
      // once animation finishes 
      modal.toggleClass('dp-block');
      $body.toggleClass('body-locked');
    });
  }
  
  function toggleModal(modal) {
    if (modal.attr('active') === 'true') {
      modal.attr('active', 'false');
      closeModal(modal);
    } else {
      modal.attr('active', 'true');
      openModal(modal);
    }
  }
  
  $('a.display-modal').on('click', function(event) {
    event.preventDefault();
    
    // get URL for AJAX
    var dataURL = $(this).attr('href');
    // Load ajax data into modal
    $modalContent.load(dataURL);
    // Show modal container
    toggleModal($modalContainer);
  }); // End $('a.display-modal').on('click')
  
  $($modalBackground).on('click', function() {
    toggleModal($modalContainer);
  });
  
  $('.close-modal').on('click', function() {
    toggleModal($modalContainer);
  });
  
}); // End $(document).ready()
  

















//$(document).ready(function() {
//  
////  Modal stuff
//  var body = $('body'),
//    close_modal = $('.close-modal'),
//    modal_container = $('.modal-container'),
//    toggleModal = function() {
//        body.toggleClass('body-locked');
//        modal_container.toggleClass('dp-block');
//    };
//  
//  function openModal(modal) {
//    var pageHeight = $(window).height();
//    modal.css({top: pageHeight});
//    $('.modal').css({marginBottom: pageHeight});
//    modal.animate({
//      top: 0
//    }, 500, function(){
//      $(".mobile-header select option[value=all]").attr('selected', true);
//    });
//  }
//  
//  $('#studio').on('click', function(event) {
//    event.preventDefault();
//    $('#modal-content').load('studio.html');
//    toggleModal();
//    openModal($('.modal-container'));
//  });
//  
//  $('#contact').on('click', function(event) {
//    event.preventDefault();
//    $('.modal').addClass("contact-modal");
//    $('#modal-content').load('contact.html');
//    toggleModal();
//    openModal($('.modal-container'));
//  });
//  
//  $('.works-gallery a').on('click', function(event){
//    event.preventDefault();
//    $('#modal-content').load($(this).attr('href'));
//    toggleModal();
//    openModal($('.modal-container'));
//  });
//  
//  $(".mobile-header select").on("change", function() {
//    var pageToLoad = $(this).val() + '.html';
//    if (pageToLoad === "contact.html") {
//      $('.modal').addClass("contact-modal");
//    }
//    $('#modal-content').load(pageToLoad);
//    toggleModal();
//    openModal($('.modal-container'));
//  }); 
//  
//  close_modal.click(function(event){
//    event.preventDefault();
//    var pageHeight = $(window).height();
//    $('.modal-container').animate({
//      scrollTop: 0,
//      top: pageHeight
//    }, 500, function() {
//      toggleModal();
//      $('.modal').removeClass('contact-modal');
//    });
//  });
//  
//
//});