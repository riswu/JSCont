"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cont = function () {
  function Cont(c) {
    _classCallCheck(this, Cont);

    this.c = c;
  }

  _createClass(Cont, [{
    key: "bind",
    value: function bind(f) {
      var _this = this;

      return new Cont(function (k) {
        return _this.c(function (a) {
          return f(a).runCont(k);
        });
      });
    }
  }, {
    key: "then",
    value: function then(f) {
      return this.bind(f);
    }
  }, {
    key: "flatMap",
    value: function flatMap(f) {
      return this.bind(f);
    }
  }, {
    key: "runCont",
    get: function get() {
      return this.c;
    }
  }], [{
    key: "return",
    value: function _return(a) {
      return new Cont(function (k) {
        return k(a);
      });
    }
  }]);

  return Cont;
}();

exports.default = Cont;
