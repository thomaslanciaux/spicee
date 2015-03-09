var domutils = require('./domutils');
var swiper = require('./swiper');

module.exports = function(id, params) {
  var sliderEl  = domutils.qid(id);
  var slider    = new Swiper(sliderEl, params);
  return slider;
};
