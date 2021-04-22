$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.heaer-logo,.header-burger,.header-container,.header-nav,.nav-items,.nav-links').toggleClass('active');
    });
});


$(document).ready(function() {
   $('.slider-items').slick({
   arrows:true,
   centerMode: true,
   centerPadding: '0px',
   slidesToShow: 3,
   speed: 1000,
   adaptiveHeight: true,
   variableWidth: true,
   });
});


