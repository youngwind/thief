(function () {


  function T(selector) {
    return new T.prototype.init(selector);
  }

  T.prototype = {
    splice: [].splice,
    length: 0,
    init: function (selector) {
      var ele = document.querySelectorAll(selector);
      for (var i = 0; i < ele.length; i++) {
        this[i] = ele[i];
      }
      this.length = ele.length;
      return this;
    },
    addClass: function (className) {
      for (var i = 0; i < this.length; i++) {
        this[i].classList.add(className);
      }
      return this;

    },
    removeClass: function (className) {
      for (var i = 0; i < this.length; i++) {
        this[i].classList.remove(className);
      }
      return this;
    }
  };

  T.prototype.init.prototype = T.prototype;


  window.T = T;
})(window);