// DOM utils

module.exports = {
  /**
   * qid
   *
   * A wrapper around document.getElementById.
   *
   * @param {String} id The searched ID
   * @return {HTMLElement} The found element if any, or `null`
   */
  qid: function(id) {
    return document.getElementById(id);
  },

  /**
   * qclass
   *
   * A wrapper around document.getElementsByClassName.
   *
   * @param {String} className The searched class
   * @return {NodeList} The found elements as a NodeList
   */
  qclass: function(className) {
    // for IE8 support
    if (!document.getElementsByClassName) {
      return this.qall('.' + className);
    }
    return document.getElementsByClassName(className);
  },

  /**
   * q
   *
   * A wrapper around document.querySelector and HTMLElement.querySelector.
   *
   * @param {String} sel The CSS selector
   * @param {HTMLElement} elt The element to search within. If `undefined`, the selector will be searched on the whole document.
   * @return {NodeList} The found element if any, or `null`
   */
  q: function(sel, elt) {
    if (!elt) elt = document;
    return elt.querySelector ? elt.querySelector(sel) : document.querySelector(sel);
  },

  /**
   * qall
   *
   * A wrapper around document.querySelectorAll and
   * HTMLElement.querySelectorAll.
   *
   * @param {String} sel The CSS selector
   * @param {HTMLElement} elt The element to search within. If `undefined`, the selector will be searched on the whole document.
   * @return {NodeList} The found elements as a NodeList
   */
  qall: function(sel, elt) {
    if (!elt) elt = document;
    return elt.querySelectorAll ? elt.querySelectorAll(sel) : (function (all, elt) {
      var c = [];
      for (var i = 0; i < all.length; i++) {
        if (all[i].parentNode.parentNode.parentNode.id == elt.id) {
          c.push(all[i]);
        }
      }
      return c.reverse();
    })(document.querySelectorAll(sel), elt);
  },

  /**
   * parents
   *
   * Returns the first parent element that makes `cb` return `true`.
   *
   * @param {HTMLElement} elt The element from where to start the search
   * @param {Function} cb The callback function
   * @return {HTMLElement} The found element if any, or document.documentElement
   */
  parents: function(elt, cb) {
    var parent = elt.parentElement;
    while (!cb(parent) && parent.parentElement &&
           parent !== document.documentElement) {
      parent = parent.parentElement;
    }
    return parent;
  },

  /**
   * parentsByClass
   *
   * Returns the first parent element that matches `className`.
   *
   * @param {HTMLElement} elt The element from where to start the search
   * @param {String} className The searched class
   * @return {HTMLElement} The found element if any, or document.documentElement
   */
  parentsByClass: function(elt, className) {
    return this.parents(elt, function(elt) {
      return elt.className === className;
    });
  },

  /**
   * prepend
   *
   * Insert an element inside another element, at the first position.
   *
   * @param {HTMLElement} parent The container element
   * @param {HTMLElement} elt The element to prepend
   * @return {HTMLElement} The inserted element
   */
  prepend: function(parent, elt) {
    return parent.insertBefore(elt, parent.firstChild);
  },

  /**
   * makeElt
   *
   * Creates and returns a new HTMLElement
   *
   * @param {String} name The tag name
   * @param {Object} props Properties to apply on the element
   * @param {Object} attrs Attributes to apply on the element
   * @param {HTMLElement} container Append the element
   * @return {HTMLElement} The created element
   */
  makeElt: function makeElt(name, props, attrs, container) {
    var elt = document.createElement(name);
    if (props) for (var i in props) elt[i] = props[i];
    if (attrs) for (var j in attrs) elt.setAttribute(j, attrs[j]);
    if (container) container.appendChild(elt);
    return elt;
  },

  /**
   * attr
   *
   * Get, set and remove HTML attributes
   *
   * Get an attribute: attr(elt, 'attrname')
   * Set an attribute: attr(elt, 'attrname', 'value')
   * Remove an attribute: attr(elt, 'attrname', null)
   *
   * @param {HTMLElement} elt The element
   * @param {String} name The attribute name
   * @param {String} value The new value of the attribute
   * @return {String} The current value of the attribute
   */
  attr: function attr(elt, name, value) {
    if (typeof value === 'undefined') {
      value = elt.getAttribute(name);
    } else if (value === null) {
      elt.removeAttribute(name);
    } else {
      elt.setAttribute(name, value);
    }
    return value;
  },

  css: function(elt, prop) {
    return window.getComputedStyle(elt, null).getPropertyValue(prop);
  },

  mkText: function(text) {
    return document.createTextNode(text);
  },

  before: function(elt, beforeElt) {
    beforeElt.parentNode.insertBefore(elt, beforeElt);
  },

  after: function(elt, afterElt) {
    if (afterElt.nextElementSibling) {
      afterElt.parentNode.insertBefore(elt, afterElt.nextElementSibling);
    } else {
      afterElt.parentNode.appendChild(elt);
    }
  },

  on: function(el, name, fn, bubble) {
    if (bubble === undefined) bubble = false;
    if (el.addEventListener) {
      el.addEventListener(name, fn, bubble);
    } else {
      el.attachEvent('on' + name, fn);
    }
  },

  off: function(el, name, fn, bubble) {
    if (bubble === undefined) bubble = false;
    // IE8 bind keydown as fallback to input event
    if (name === 'input' && !('oninput' in el)) {
      name = 'keydown';
    }
    if (el.removeEventListener) {
      el.removeEventListener(name, fn, bubble);
    } else {
      el.detachEvent('on' + name, fn);
    }
  },

  addClass: function(el, className) {
    if (el.className.indexOf(className) != -1) return;
    el.className += ' ' + className;
  },

  removeClass: function(el, className) {
    var elClasses = el.className;
    while (elClasses.indexOf(className) != -1) {
      elClasses = elClasses.replace(className, '');
      elClasses = elClasses.trim();
    }
    el.className = elClasses;
  },

  hasClass: function(el, cls) {
     return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
  }
};
