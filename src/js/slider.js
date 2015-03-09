var domutils = require('./domutils');
var swiper = require('./swiper');

module.exports = function(id) {
  var sliderEl  = domutils.qid(id);
  var slider    = new Swiper(sliderEl, {
    pagination: '.swiper-pagination',
    nextButton: '.button-next',
    prevButton: '.button-previous'
  });
};
