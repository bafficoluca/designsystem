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

var _path, _path2;

var _excluded = ["children", "size"];
var Purchase = /*#__PURE__*/React__default['default'].forwardRef(function Purchase(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 11",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15,3V1H1v2H15z M15,4H1v6h14V4z M0.8,0h14.5C15.7,0,16,0.3,16,0.8v9.5c0,0.4-0.3,0.8-0.8,0.8H0.8 C0.3,11,0,10.7,0,10.2V0.8C0,0.3,0.3,0,0.8,0z"
  })), _path2 || (_path2 = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 9L2 8 7 8 7 9z"
  })), children);
});
Purchase.propTypes = iconPropTypes.iconPropTypes;

module.exports = Purchase;