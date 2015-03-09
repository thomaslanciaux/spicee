var slider = require('./slider.js');
var navToggle = require('./nav-toggle.js')('nav-toggle');
var score = require('./score.js')('scoring');

slider('slider', {
    pagination : '.swiper-pagination',
    nextButton : '.button-next',
    prevButton : '.button-previous',
});

var prehomeSlider = slider('prehome-slider', {
    pagination      : '.swiper-pagination',
    nextButton      : '.button-next',
    prevButton      : '.button-previous',
    centeredSlides  : true,
    slidesPerView   : (window.innerWidth > 599)? 1.2 : 1,
    initialSlide    : 1,
    loop            : true
});
