$('.carousel').carousel({
  interval: 2000
})

$(document).ready(function(){ 
  $('.tileHeading').on('click', function(e) {
    // Prevent the page from reloading
  

    // Remove .active from the current active .tileHeading
    $('.tileHeading.active').removeClass('active');

    // Set the .active class to the current clicked element
    $(this).addClass('active');  

  });
});