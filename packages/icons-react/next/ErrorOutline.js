/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */
'use strict';

var iconPropTypes = require('./iconPropTypes-ca0c5320.js');
var React = require('react');
require('@carbon/icon-helpers');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _path;

var _excluded = ["children", "size"];
var ErrorOutline = /*#__PURE__*/React__default['default'].forwardRef(function ErrorOutline(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2.75109925,4.16531281 C1.96443363,5.2402665 1.5,6.5658961 1.5,8 C1.5,11.5898509 4.41014913,14.5 8,14.5 C9.4341039,14.5 10.7597335,14.0355664 11.8346872,13.2489008 L2.75109925,4.16531281 Z M4.16531281,2.75109925 L13.2489008,11.8346872 C14.0355664,10.7597335 14.5,9.4341039 14.5,8 C14.5,4.41014913 11.5898509,1.5 8,1.5 C6.5658961,1.5 5.2402665,1.96443363 4.16531281,2.75109925 Z M8,16 C3.581722,16 -8.8817842e-16,12.418278 -8.8817842e-16,8 C-8.8817842e-16,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 Z"
  })), children);
});
ErrorOutline.propTypes = iconPropTypes.iconPropTypes;

module.exports = ErrorOutline;