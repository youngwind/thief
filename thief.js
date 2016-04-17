(function () {

  // 混合模式 = 构造模式 + 原型模式

  // 构造模式定义属性
  function T(selector) {
    this.dom = document.querySelector(selector);
  }

  // 原型模式定义方法
  T.prototype.addClass = function (className) {
    this.dom.classList.add(className)
  };

  T.prototype.removeClass = function (className) {
    this.dom.classList.remove(className)
  };

  window.T = T;
})(window);