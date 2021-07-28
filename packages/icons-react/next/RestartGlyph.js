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
var RestartGlyph = /*#__PURE__*/React__default['default'].forwardRef(function RestartGlyph(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 16",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6,8 L7.3,9.3 L9.2,7.4 L10.6,6 L12,4.7 L7.3,0 L6,1.2 L8.6,3.6 L6.1,3.6 C6.1,3.6 6.1,3.6 6,3.6 L5.9,3.6 C4.2,3.6 2.6,4.4 1.5,5.6 C0.5,6.7 0,8.1 0,9.6 C0,12.9 2.7,15.6 6,15.6 C7.6,15.6 9,15 10,14 L8.6,12.6 C7.9,13.2 7,13.6 6,13.6 C3.8,13.6 2,11.8 2,9.6 C2,7.4 3.8,5.6 6,5.6 L6.1,5.6 L8.8,5.6 L8.2,6.2 L6,8 L6,8 Z"
  })), children);
});
RestartGlyph.propTypes = iconPropTypes.iconPropTypes;

module.exports = RestartGlyph;