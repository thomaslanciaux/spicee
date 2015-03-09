var domutils = require('./domutils');

module.exports = function(cls) {
  var navToggleEls    = domutils.qclass(cls);
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
};
