import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '@front10/helpers/dist/UseStyles';

const Button = props => {
  const {
    disabled,
    dataTestId,
    tooltip,
    children,
    ariaLabel,
    ariaLabelledBy,
    ariaSelected,
    ariaExpanded,
    ariaDescribedBy,
    ariaDisabled,
    value,
    role,
    type,
    onClick,
    color,
    outline,
    name,
    size,
    active,
    onKeyDown,
    dataReactCmpOwner,
    focusReferences,
    tabIndex
  } = props;
  const [className, style] = useStyles(props);
  let cssclass = `Button fr-btn ${className}`;
  if (outline) cssclass += ` fr-btn-outline-${color}`;
  else cssclass += ` fr-btn-${color}`;
  if (size) cssclass += ` fr-btn-${size}`;
  if (active) cssclass += ` fr-active`;
  const dataAttrs = dataReactCmpOwner ? { 'data-react-cmp-owner': dataReactCmpOwner } : {};

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      name={name}
      ref={focusReferences}
      title={tooltip}
      disabled={disabled}
      className={cssclass}
      onClick={onClick}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-selected={ariaSelected}
      aria-expanded={ariaExpanded}
      aria-describedby={ariaDescribedBy}
      aria-disabled={ariaDisabled}
      value={value}
      type={type}
      style={style}
      onKeyDown={onKeyDown}
      {...dataAttrs}
      tabIndex={tabIndex}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Disable or enable button
   */
  disabled: PropTypes.bool,
  /**
   * Define if button is only with border
   */
  outline: PropTypes.bool,
  /**
   * Name of button
   */
  name: PropTypes.string,
  /**
   * Define if button is active
   */
  active: PropTypes.bool,
  /**
   * Aria label of the button
   */
  ariaLabel: PropTypes.string,
  /**
   * ariaLabelledBy of the button
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * Aria selected button.
   */
  ariaSelected: PropTypes.bool,
  /**
   * Aria expanded button,
   */
  ariaExpanded: PropTypes.bool,
  /**
   * aria described by button
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * aria disabled by button
   */
  ariaDisabled: PropTypes.bool,
  /**
   * value of the button
   */
  value: PropTypes.string,
  /**
   * Button role.
   */
  role: PropTypes.oneOf([
    'button',
    'checkbox',
    'link',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'radio',
    'switch',
    'tab'
  ]),
  /**
   * Button tooltip
   */
  tooltip: PropTypes.string,
  /**
   * Button size. Can be <code>'lg'</code>, <code>'sm'</code>
   */
  size: PropTypes.string,
  /**
   * Type of the button
   */
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  /**
   * Color to apply to button
   */
  color: PropTypes.string,
  /**
   * Cursor of the button
   */
  cursor: PropTypes.oneOf(['default', 'pointer']),
  /**
   * Button styles
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Handle to be called when button is clicked
   */
  onClick: PropTypes.func,
  /**
   * Handle to be called when a Key is pressed
   */

  onKeyDown: PropTypes.func,
  /**
   * Allows the creation of a data-react-cmp-owner data-attr
   */
  dataReactCmpOwner: PropTypes.string,
  /**
   * ref focus
   */
  focusReferences: PropTypes.func,
  /**
   * Tab index of buttom
   */
  tabIndex: PropTypes.number,
  /**
   * Data test ID of buttom
   */
  dataTestId: PropTypes.string
};
Button.defaultProps = {
  disabled: false,
  outline: false,
  name: null,
  active: false,
  dataTestId: null,
  ariaLabel: null,
  ariaLabelledBy: null,
  ariaSelected: null,
  ariaExpanded: null,
  ariaDescribedBy: null,
  ariaDisabled: null,
  value: null,
  role: 'button',
  tooltip: null,
  size: '',
  type: 'button',
  color: 'light',
  cursor: 'pointer',
  children: null,
  onClick: () => {},
  onKeyDown: () => {},
  dataReactCmpOwner: null,
  focusReferences: () => {},
  tabIndex: null
};

Button.componentName = 'Button';

export default Button;
