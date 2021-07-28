function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { iconEllipsis, iconWarningGlyph, iconLocked, iconErrorGlyph, iconCheckmark, iconMenu, iconOverflowMenu } from '@wfp/icons';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var StepNavigationItem = /*#__PURE__*/function (_React$Component) {
  _inherits(StepNavigationItem, _React$Component);

  var _super = _createSuper(StepNavigationItem);

  function StepNavigationItem() {
    _classCallCheck(this, StepNavigationItem);

    return _super.apply(this, arguments);
  }

  _createClass(StepNavigationItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          handleTabClick = _this$props.handleTabClick,
          index = _this$props.index,
          label = _this$props.label,
          status = _this$props.status,
          helperText = _this$props.helperText,
          selectedPage = _this$props.selectedPage,
          _onClick = _this$props.onClick,
          page = _this$props.page,
          renderAnchor = _this$props.renderAnchor;
      var classes = classNames("".concat(prefix, "--step-navigation__nav-item"), _defineProperty({}, "".concat(prefix, "--step-navigation__nav-item--before"), page < selectedPage), _defineProperty({}, "".concat(prefix, "--step-navigation__nav-item--selected"), page === selectedPage), _defineProperty({}, "".concat(prefix, "--step-navigation__nav-item--").concat(status), status), className);
      var anchorProps = {
        className: "".concat(prefix, "--step-navigation__nav-link"),
        ref: function ref(e) {
          _this.tabAnchor = e;
        }
      };
      var icon = {
        'not-started': {
          icon: iconEllipsis
        },
        warning: {
          icon: iconWarningGlyph
        },
        locked: {
          icon: iconLocked
        },
        skip: {
          icon: iconOverflowMenu
        },
        disabled: {
          icon: iconErrorGlyph
        },
        complete: {
          icon: iconCheckmark
        },
        summary: {
          icon: iconMenu
        }
      };
      return /*#__PURE__*/React.createElement("li", {
        tabIndex: -1,
        className: classes,
        onClick: function onClick(evt) {
          if (status !== 'locked') {
            handleTabClick(index, label, evt);

            _onClick(evt);
          }
        },
        role: "presentation"
      }, renderAnchor ? renderAnchor(anchorProps) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--step-navigation__nav-item__indicator")
      }, status && page !== selectedPage ? /*#__PURE__*/React.createElement(Icon, {
        icon: icon[status].icon,
        width: "14",
        height: "14",
        description: "Step Item"
      }) : /*#__PURE__*/React.createElement("span", null, page + 1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefix, "--step-navigation__nav-item__text")
      }, label), helperText && /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefix, "--step-navigation__nav-item__helper-text")
      }, helperText))));
    }
  }]);

  return StepNavigationItem;
}(React.Component);

_defineProperty(StepNavigationItem, "propTypes", {
  /**
   * Provide a className that is applied to the StepNavigation component
   *
   */
  className: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   *
   */
  helperText: PropTypes.node,

  /**
   * Provide the index of the each item
   *
   */
  index: PropTypes.number,

  /**
   * Provide the text that will be read by a screen reader when visiting this control
   *
   */
  label: PropTypes.string,

  /**
   * By default, this value is "presentation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * On click handler to change the currently active item.
   **/
  onClick: PropTypes.func.isRequired,

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selectedPage: PropTypes.number.isRequired,

  /**
   * An optional parameter to allow overriding the anchor rendering.
   * Useful for using Tab along with react-router or other client
   * side router libraries.
   */
  renderAnchor: PropTypes.func
});

_defineProperty(StepNavigationItem, "defaultProps", {
  role: 'presentation',
  label: 'provide a label',
  tabIndex: 0,
  selectedPage: 0,
  onClick: function onClick() {}
});

export { StepNavigationItem as default };