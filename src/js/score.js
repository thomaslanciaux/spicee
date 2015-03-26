var $ = require('./domutils');

function setScoreClass(scoreEl, cls) {
  domutils.addClass(scoreEl, cls);
}

function postScore(formEl, cb) {
  var xhr      = new XMLHttpRequest();
  var formData = new FormData(formEl);
  var url      = formEl.getAttribute('action');

  xhr.onload = function() {
    if (this.status !== 200) {
      return 'Error ' + this.status + ' on POST to ' + url;
    }
    cb(null)
  }

  xhr.open('post', url);
  xhr.send(formData);
}

function initScore(score) {
  var scoreEl = $.q('fieldset', score);
  var formEl  = scoreEl.parentElement;
  var origin  = scoreEl.className;
  var labels  = $.qall('label', score);
  var inputs  = $.qall('input[type=radio]', score);
  var i       = labels.length;
  var loadEl  = $.makeElt('small', {
    className: 'loader',
    innerHTML: $.attr(formEl, 'data-load-text')
  }, null, formEl);
  var timer;

  while (i--) {
    $.on(labels[i], 'mouseenter', function() {
      scoreEl.className = $.attr(this, 'for');
    });

    $.on(inputs[i], 'click', function() {
      var cls = this.id;
      scoreEl.className = cls;
      origin = cls;

      loadEl.classList.add('loading-state');
      loadEl.innerHTML = $.attr(formEl, 'data-load-text');

      postScore(formEl, function(err) {
        if (err) return console.log(err);
        loadEl.innerHTML = $.attr(formEl, 'data-success-text');
        window.clearTimeout(timer);
        timer = window.setTimeout(function() {
          loadEl.classList.remove('loading-state');
        }, 3000);
      });
    });
  }

  $.on(scoreEl, 'mouseleave', function() {
    scoreEl.className = origin;
  });
}

module.exports = function(cls) {
  var scores = $.qclass(cls);
  var i = scores.length;
  while (i--) {
    initScore(scores[i]);
  }
};
