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


  /**
   * 请求json数据
   * @param url {string}/{Array} 请求url(数组)
   * @param isAll {boolean} 如果url是数组,那么此状态位有用,默认为true
   *                        如果为true,则所有请求都结束之后再返回，传递给resolve的数据是所有请求返回数据构成的数组
   *                        如果为false,则任一请求结束之后都会返回，传递给resolve的数据是那个率先完成的请求返回的数据
   * @returns {Promise}
   */
  T.getJSON = function (url, isAll) {

    if (!Array.isArray(url)) {
      return generatePromiseXHR(url);
    }

    var promises = url.map(function (subUrl) {
      return generatePromiseXHR(subUrl);
    });

    if (isAll) {
      return Promise.all(promises);
    } else {
      return Promise.race(promises);
    }


    function generatePromiseXHR(url) {
      var promise = new Promise(function (resolve, reject) {
        // 创建一个请求对象
        var client = new XMLHttpRequest();

        client.open('get', url);
        client.setRequestHeader("Accept", "application/json");
        client.responseType = 'json';
        client.send();

        client.onreadystatechange = function () {
          if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 300 || xhr.status == 304) {
              resolve(this.response);
            } else {
              reject(this.response);
            }
          }
        };
      });
      return promise;
    }

  };


  T.prototype.init.prototype = T.prototype;


  window.T = T;
})(window);
