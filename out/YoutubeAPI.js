"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUrl = exports.fetchVideos = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//import { google } from "googleapis";
var youtube = google.youtube({
  version: "v3",
  auth: "AIzaSyARTFcoutOxWxrm9u-ayOiNDgUc5yWN2So"
});

var fetchVideos =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var query, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return youtube.search.list({
              q: query,
              type: "video",
              part: "snippet"
            });

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.items);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchVideos(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.fetchVideos = fetchVideos;

var fetchUrl = function fetchUrl(_ref3) {
  var id = _ref3.id.videoId;
  return "https://youtube.com/watch?v=".concat(id);
};

exports.fetchUrl = fetchUrl;