// Polyfill for CustomEvent in IE11 and older browsers
if (typeof window.CustomEvent !== 'function') {
  window.CustomEvent = function(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };
}

// Polyfill for Array.from
if (!Array.from) {
  Array.from = function(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };
}

// Polyfill for Object.keys
if (!Object.keys) {
  Object.keys = function(obj) {
    var keys = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  };
}

// Polyfill for Array.prototype.forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// Polyfill for Array.prototype.find
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    for (var i = 0; i < length; i++) {
      var value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

// Polyfill for Array.prototype.filter
if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback) {
    var filtered = [];
    for (var i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filtered.push(this[i]);
      }
    }
    return filtered;
  };
}

// Polyfill for Array.prototype.map
if (!Array.prototype.map) {
  Array.prototype.map = function(callback) {
    var mapped = [];
    for (var i = 0; i < this.length; i++) {
      mapped.push(callback(this[i], i, this));
    }
    return mapped;
  };
}