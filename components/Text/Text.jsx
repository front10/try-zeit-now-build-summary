import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '@front10/helpers/dist/UseStyles';

const Text = props => {
  const {
    children,
    id,
    type,
    htmlFor,
    ariaLabel,
    ariaHidden,
    role,
    dataReactCmpOwner,
    onClick
  } = props;
  const Tag = type;
  const dataAttrs = dataReactCmpOwner ? { 'data-react-cmp-owner': dataReactCmpOwner } : {};
  const [className, style] = useStyles(props);

  return (
    <Tag
      className={`fr-${type} ${className}`}
      id={id}
      style={style}
      htmlFor={htmlFor}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      role={role}
      onClick={onClick}
      {...dataAttrs}
    >
      {children}
    </Tag>
  );
};

Text.propTypes = {
  /**
   * id of components
   */
  id: PropTypes.string,
  /**
   * Icon to show in component
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Type of the element
   */
  type: PropTypes.oneOf(['span', 'label', 'p']),
  /**
   * Defne htmlFor
   */
  htmlFor: PropTypes.string,
  /**
   * aria label
   */
  ariaLabel: PropTypes.string,
  /**
   * hide content to screen readers
   */
  ariaHidden: PropTypes.bool,
  /**
   * Role atribute
   */
  role: PropTypes.string,
  /**
   * Allows the creation of a data-react-cmp-owner data-attr
   */
  dataReactCmpOwner: PropTypes.string,
  /**
   * onClick function
   */
  onClick: PropTypes.func
};
Text.defaultProps = {
  id: null,
  children: null,
  type: 'span',
  htmlFor: null,
  ariaLabel: null,
  ariaHidden: null,
  role: null,
  dataReactCmpOwner: null,
  onClick: null
};

Text.componentName = 'Text';

export default Text;
