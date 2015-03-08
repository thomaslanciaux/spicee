var domutils = require('./domutils');
var swiper = require('./swiper');

// Nav toggle init
var navToggleEls    = domutils.qclass('nav-toggle');
var bodyEl          = domutils.q('body');
var toggleElsCount  = navToggleEls.length;
while (toggleElsCount--) {
  domutils.on(navToggleEls[toggleElsCount], 'click', function(e) {
    e.preventDefault();
    if (domutils.hasClass(bodyEl, 'nav-toggled')) {
      domutils.removeClass(bodyEl, 'nav-toggled')
    } else {
      domutils.addClass(bodyEl, 'nav-toggled')
    }
  });
}

// Slider init
var sliderEl  = domutils.qid('slider');
var slider    = new Swiper(sliderEl, {
  pagination: '.swiper-pagination',
  nextButton: '.button-next',
  prevButton: '.button-previous'
});
