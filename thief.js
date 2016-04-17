(function () {


  function T(selector) {
    return new T.prototype.init(selector);
  }

  T.prototype = {
    init: function (selector) {
      this.dom = document.querySelector(selector);
      return this;
    },
    addClass: function (className) {
      this.dom.classList.add(className);
    },
    removeClass: function (className) {
      this.dom.classList.remove(className);
    }
  };

  T.prototype.init.prototype = T.prototype;


  window.T = T;
})(window);