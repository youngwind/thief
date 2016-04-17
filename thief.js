(function () {

  // 构造模式
  var T = function (selector) {

    // 获取DOM元素
    this.dom = document.querySelector(selector);

    // 添加类
    this.addClass = function (className) {
      this.dom.classList.add(className);
    };

    // 删除类
    this.removeClass = function (className) {
      this.dom.classList.remove(className);
    };
  };

  window.T = T;
})(window);