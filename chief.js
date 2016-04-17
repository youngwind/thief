(function () {
  var T = function (selector) {

    // 获取DOM元素
    var dom = document.querySelector(selector);

    // 添加类
    dom.addClass = function (className) {
      this.classList.add(className);
    };

    // 删除类
    dom.removeClass = function (className) {
      this.classList.remove(className)
    };
    return dom;
  };

  window.T = T;
})(window);