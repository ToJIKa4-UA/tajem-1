$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.heaer-logo,.header-burger,.header-container,.header-nav,.nav-items,.nav-links').toggleClass('active');
    });
});


$(document).ready(function() {
   $('.slider-items').slick({
   arrows:true,
   centerMode: true,
   slidesToShow: 3,
   speed: 1000,
   adaptiveHeight: true,
   variableWidth: true,
   focusOnSelect: true,
   responsive: [
    {
      breakpoint: 320,
      settings: {
      centerMode: false,
      slidesToShow: 1
      }
    }
    ]
   });
});


