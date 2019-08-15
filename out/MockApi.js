"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUrl = exports.fetchVideos = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//import YouTubeSample from "../example-youtube-response.json";
var wait =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var stallTime,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            stallTime = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1500;
            _context.next = 3;
            return new Promise(function (resolve) {
              return setTimeout(resolve, stallTime);
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function wait() {
    return _ref.apply(this, arguments);
  };
}();

var fetchVideos =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref2) {
    var query;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = _ref2.query;
            _context2.next = 3;
            return wait();

          case 3:
            console.log(query);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchVideos(_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.fetchVideos = fetchVideos;

var fetchUrl = function fetchUrl(_ref4) {
  var id = _ref4.id.videoId;
  return "https://youtube.com/watch?v=".concat(id);
};

exports.fetchUrl = fetchUrl;