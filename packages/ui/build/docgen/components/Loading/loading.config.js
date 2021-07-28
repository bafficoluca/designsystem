"use strict";

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _settings.default.prefix;
module.exports = {
  context: {
    prefix: prefix
  },
  variants: [{
    name: 'default',
    label: 'Loading',
    notes: "\n        Loading spinners are used when retrieving data or performing slow computations,\n        and help to notify users that loading is underway.\n      ",
    context: {
      overlay: true
    }
  }, {
    name: 'without-overlay',
    label: 'Without overlay',
    context: {
      overlay: false
    }
  }, {
    name: 'small',
    label: 'Small',
    context: {
      overlay: false,
      small: true
    }
  }]
};