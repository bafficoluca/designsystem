import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

/**
 * Checkboxes are used for a list of options where the user may select multiple options, including all or none. */

const Checkbox = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    labelText,
    onChange,
    indeterminate,
    hideLabel,
    wrapperClassName,
    inputRef = ref,
    title = '',
    ...other
  } = props;
  const customId = id ? id : other.name;
  let input;
  const labelClasses = classNames(`${prefix}--checkbox-label`, className);
  const innerLabelClasses = classNames({
    [`${prefix}--visually-hidden`]: hideLabel,
  });
  const wrapperClasses = classNames(
    `${prefix}--form-item`,
    `${prefix}--checkbox-wrapper`,
    wrapperClassName
  );

  return (
    <div className={wrapperClasses}>
      <input
        {...other}
        type="checkbox"
        onChange={(evt) => {
          onChange(evt, evt.target.checked, customId);
        }}
        className="wfp--checkbox"
        id={customId}
        ref={(el) => {
          if (el) {
            el.indeterminate = indeterminate;
          }
          if (typeof inputRef === 'function') {
            inputRef(el);
          } else if (Object(inputRef) === inputRef) {
            inputRef.current = el;
          }
        }}
      />
      <label htmlFor={customId} className={labelClasses} title={title || null}>
        <span className={innerLabelClasses}>{labelText}</span>
      </label>
    </div>
  );
});

Checkbox.propTypes = {
  /**
   * Specify whether the underlying input should be checked
   */
  checked: PropTypes.bool,

  /**
   * Specify whether the underlying input should be checked by default
   */
  defaultChecked: PropTypes.bool,

  /**
   * Specify whether the Checkbox is in an indeterminate state
   */
  indeterminate: PropTypes.bool,

  /**
   * Specify an optional className to be applied to the <label> node
   */
  className: PropTypes.string,

  /**
   * Specify whether the Checkbox should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide an `id` to uniquely identify the Checkbox input
   */
  id: PropTypes.string.isRequired,

  /**
   * Provide a label to provide a description of the Checkbox input that you are
   * exposing to the user
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool,

  /**
   * Receives three arguments: the dom event, true/false and the checkbox's id.
   */
  onChange: PropTypes.func,

  /**
   * Specify a title for the <label> node for the Checkbox
   */
  title: PropTypes.string,

  /**
   * The CSS class name to be placed on the wrapping element
   */
  wrapperClassName: PropTypes.string,
};

Checkbox.defaultProps = {
  onChange: () => {},
  indeterminate: false,
};

export default Checkbox;
