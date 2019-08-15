"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockAPI = exports.RipperAPI = void 0;

var Ripper = _interopRequireWildcard(require("./RipperAPI"));

var Mock = _interopRequireWildcard(require("./MockApi"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

//import * as YouTube from "./YoutubeAPI";
var RipperAPI = Ripper; //export const YouTubeAPI = YouTube;

exports.RipperAPI = RipperAPI;
var MockAPI = Mock;
exports.MockAPI = MockAPI;