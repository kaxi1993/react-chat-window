"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Typing() {
  return _react2.default.createElement(
    "div",
    { className: "sc-typing" },
    _react2.default.createElement(
      "div",
      { className: "sc-typing--circle" },
      _react2.default.createElement("div", { className: "sc-typing--dot" }),
      _react2.default.createElement("div", { className: "sc-typing--dot" }),
      _react2.default.createElement("div", { className: "sc-typing--dot" })
    )
  );
}

exports.default = Typing;
module.exports = exports["default"];