// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Compute =
/*#__PURE__*/
function () {
  function Compute() {
    _classCallCheck(this, Compute);
  }

  _createClass(Compute, [{
    key: "plus",
    value: function plus(a, b) {
      return a + b;
    }
  }, {
    key: "minus",
    value: function minus(a, b) {
      return a - b;
    }
  }, {
    key: "mul",
    value: function mul(a, b) {
      return a * b;
    }
  }, {
    key: "div",
    value: function div(a, b) {
      return a / b;
    }
  }]);

  return Compute;
}();

var Calculator =
/*#__PURE__*/
function (_Compute) {
  _inherits(Calculator, _Compute);

  var _super = _createSuper(Calculator);

  function Calculator(doc) {
    var _this;

    _classCallCheck(this, Calculator);

    _this = _super.call(this);
    var oCal = document.querySelector('.J_calculator');
    _this.fInput = oCal.querySelectorAll('input')[0];
    _this.sInput = oCal.querySelectorAll('input')[1];
    _this.oBtnGroup = oCal.querySelector('.btn-group');
    _this.oBtnItems = _this.oBtnGroup.querySelectorAll('button');
    _this.oResult = oCal.getElementsByClassName('result')[0];
    _this.data = _this.defineData();
    console.log(_this.data);
    _this.btnIndex = 0;
    return _this;
  }

  _createClass(Calculator, [{
    key: "init",
    value: function init() {
      this.bindEvent();
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      this.oBtnGroup.addEventListener('click', this.onFieldBtn.bind(this), false);
      this.fInput.addEventListener('input', this.onNumberInput.bind(this, false));
      this.sInput.addEventListener('input', this.onNumberInput.bind(this, false));
    } // 定义数据

  }, {
    key: "defineData",
    value: function defineData() {
      // 定义初始值
      var _obj = {},
          fNumber = 0,
          sNumber = 0,
          field = 'plus'; // 取到外部的this 能在defineProperties内部中访问到

      var _self = this;

      Object.defineProperties(_obj, {
        fNumber: {
          get: function get() {
            console.log(' "fNumber" 已经被获取 ');
            return fNumber;
          },
          set: function set(newVal) {
            fNumber = newVal;

            _self.computeResult(fNumber, sNumber, field);

            console.log(" \u5F53\u524D\u7684\u503C\uFF1A\u201C fNumber \u201D \u53D1\u751F\u6539\u53D8\u3002 [".concat(fNumber, "]"));
          }
        },
        sNumber: {
          get: function get() {
            console.log(' "sNumber" 已经被获取 ');
            return sNumber;
          },
          set: function set(newVal) {
            sNumber = newVal;

            _self.computeResult(fNumber, sNumber, field);

            console.log(" \u5F53\u524D\u7684\u503C\uFF1A\u201C sNumber \u201D \u53D1\u751F\u6539\u53D8\u3002 [".concat(sNumber, "]"));
          }
        },
        field: {
          get: function get() {
            console.log(' "field" 已经被获取 ');
            return field;
          },
          set: function set(newVal) {
            field = newVal;

            _self.computeResult(fNumber, sNumber, field);

            console.log(" \u5F53\u524D\u7684\u503C\uFF1A\u201C field \u201D \u53D1\u751F\u6539\u53D8\u3002 [".concat(field, "]"));
          }
        }
      });
      return _obj;
    }
  }, {
    key: "onFieldBtn",
    value: function onFieldBtn(ev) {
      var e = ev || window.event,
          tar = e.target || e.srcElement,
          tagName = tar.tagName.toLowerCase();
      tagName === 'button' && this.fieldUpdate(tar);
    } // 切换按钮，

  }, {
    key: "fieldUpdate",
    value: function fieldUpdate(target) {
      // 当点击之前的按钮样式清空
      this.oBtnItems[this.btnIndex].className = ''; // 获取 当前按钮的index

      this.btnIndex = [].indexOf.call(this.oBtnItems, target);
      target.className += 'current'; // 改变当前按钮的 属性field

      this.data.field = target.getAttribute('data-field');
    } // 获取 input 输入的值 并给 this.data。fNumber / sNumber

  }, {
    key: "onNumberInput",
    value: function onNumberInput(ev) {
      var e = ev || window.event,
          tar = e.target || e.srcElement,
          className = tar.className,
          val = Number(tar.value.replace(/\s+/g, '')) || 0;

      switch (className) {
        case 'f-input':
          this.data.fNumber = val;
          break;

        case 's-input':
          this.data.sNumber = val;
          break;

        default:
          break;
      }
    }
  }, {
    key: "computeResult",
    value: function computeResult(fNumber, sNumber, field) {
      this.oResult.innerText = this[field](fNumber, sNumber);
    }
  }]);

  return Calculator;
}(Compute);

new Calculator(document).init();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.5475c81d.js.map