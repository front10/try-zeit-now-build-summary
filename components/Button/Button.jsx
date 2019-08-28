import React from "react";
import PropTypes from "prop-types";
import useStyles from "@front10/helpers/dist/UseStyles";

const Button = props => {
  const {
    disabled,
    tooltip,
    children,
    value,
    type,
    onClick,
    color,
    outline,
    name,
    size,
    active
  } = props;
  const [className, style] = useStyles(props);
  let cssclass = `Button fr-btn ${className}`;
  if (outline) cssclass += ` fr-btn-outline-${color}`;
  else cssclass += ` fr-btn-${color}`;
  if (size) cssclass += ` fr-btn-${size}`;
  if (active) cssclass += ` fr-active`;

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      name={name}
      title={tooltip}
      disabled={disabled}
      className={cssclass}
      onClick={onClick}
      value={value}
      type={type}
      style={style}
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
   * value of the button
   */
  value: PropTypes.string,

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
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  /**
   * Color to apply to button
   */
  color: PropTypes.string,
  /**
   * Button styles
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * Handle to be called when button is clicked
   */
  onClick: PropTypes.func
};
Button.defaultProps = {
  disabled: false,
  outline: false,
  name: null,
  active: false,
  value: null,
  size: "",
  type: "button",
  color: "light",
  children: null,
  onClick: () => {}
};

Button.componentName = "Button";

export default Button;
