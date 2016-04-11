var chief = (function () {
  var _count = 1;

  function a() {
    console.log(_count);
  }

  function b() {
  }

  return ({
    a: a,
    b: b
  });
})();