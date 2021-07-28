"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _reactFinalForm = require("react-final-form");

var _Toggle = _interopRequireDefault(require("../Toggle"));

var _ReduxFormWrapper = _interopRequireDefault(require("../ReduxFormWrapper"));

var _Button = _interopRequireDefault(require("../Button"));

var _Blockquote = _interopRequireDefault(require("../Blockquote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onSubmit = function onSubmit() {};

(0, _react2.storiesOf)('Components|ReduxFormWrapper', module).addDecorator(_addonKnobs.withKnobs).add('Toggle (react-final-form)', function () {
  return /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {
    onSubmit: onSubmit,
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit,
          form = _ref.form,
          submitting = _ref.submitting,
          pristine = _ref.pristine,
          values = _ref.values;
      return /*#__PURE__*/_react.default.createElement("form", {
        onSubmit: handleSubmit,
        className: "wfp--form-long"
      }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        component: _ReduxFormWrapper.default,
        InputComponent: _Toggle.default,
        id: "radio-1",
        name: "mode",
        value: "select 1",
        labelText: "select 1"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "buttons"
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        type: "submit",
        disabled: submitting || pristine
      }, "Submit"), ' ', /*#__PURE__*/_react.default.createElement(_Button.default, {
        type: "button",
        onClick: form.reset,
        disabled: submitting || pristine
      }, "Reset")), /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
        code: true
      }, JSON.stringify(values, 0, 2)));
    }
  });
});