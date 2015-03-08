var domutils = require('./domutils');
var swiper = require('./swiper');

var sliderEl = domutils.qid('slider');
var slider = new Swiper(sliderEl, {
  pagination: '.swiper-pagination',
  nextButton: '.button-next',
  prevButton: '.button-previous'
});
