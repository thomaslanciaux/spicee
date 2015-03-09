var domutils = require('./domutils');

function setScoreClass(scoreEl, cls) {
  domutils.addClass(scoreEl, cls);
}

function initScore(score) {
  var scoreEl = domutils.q('fieldset', score);
  var origin  = scoreEl.className;
  var labels  = domutils.qall('label', score);
  var inputs  = domutils.qall('input[type=radio]', score);
  var i       = labels.length;

  console.log(inputs);

  while (i--) {
    domutils.on(labels[i], 'mouseenter', function() {
      scoreEl.className = domutils.attr(this, 'for');
    });

    domutils.on(inputs[i], 'click', function() {
      var cls = this.id;
      scoreEl.className = cls;
      origin = cls;
    });
  }

  domutils.on(scoreEl, 'mouseleave', function() {
    scoreEl.className = origin;
  });
}

module.exports = function(cls) {
  var scores = domutils.qclass(cls);
  var i = scores.length;
  while (i--) {
    initScore(scores[i]);
  }
};
