"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _loaderModule = _interopRequireDefault(require("./loader.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @render react

 * @name Loader component

 * @description It's a simple svg loader. Sizing of font-size

 * @example

 * <Loader />

 */
var Loader = function Loader() {
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "loader-circle",
    className: _loaderModule.default.loader
  }, /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 24 24",
    height: "24",
    width: "24",
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    fill: "none",
    cx: "12",
    cy: "12",
    r: "10.5",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeDasharray: "64"
  }), /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "stroke-dashoffset",
    dur: "2.5s",
    from: "0",
    to: "128",
    repeatCount: "indefinite"
  })));
};

var _default = Loader;
exports.default = _default;

//# sourceMappingURL=index.js.map