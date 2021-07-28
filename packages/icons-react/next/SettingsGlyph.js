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
var SettingsGlyph = /*#__PURE__*/React__default['default'].forwardRef(function SettingsGlyph(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-1 2 16 16",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13.1 10c0-.3 0-.6-.1-1l2-1.7-1.7-2.7-2.3.8c-.6-.5-1.2-.9-1.9-1.1L8.6 2H5.4l-.5 2.2c-.7.3-1.4.7-1.9 1.2L.7 4.6-1 7.3.9 9c0 .3-.1.6-.1 1s0 .6.1 1L-1 12.7l1.7 2.7 2.3-.8c.6.5 1.2.9 1.9 1.1l.5 2.3h3.2l.5-2.2c.7-.3 1.3-.6 1.9-1.1l2.3.8 1.7-2.7-1.9-1.8v-1zM7 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
  })), children);
});
SettingsGlyph.propTypes = iconPropTypes.iconPropTypes;

module.exports = SettingsGlyph;