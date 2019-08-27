/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const BaseBox = props => {
  const {
    children,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseMove,
    id,
    disabled,
    onFocus,
    onBlur,
    onKeyDown,
    onScroll,
    direction,
    title,
    tabIndex,
    role,
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    ariaHidden,
    ariaLive,
    focusReferences,
    dataHeight,
    dataTestId,
    className,
    style
  } = props;

  return (
    <div
      className={className}
      style={style}
      role={role}
      id={id}
      dir={direction}
      title={title}
      disabled={disabled}
      tabIndex={tabIndex}
      ref={focusReferences}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onBlur={onBlur}
      onFocus={onFocus}
      onScroll={onScroll}
      onKeyDown={onKeyDown}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-hidden={ariaHidden}
      aria-live={ariaLive}
      data-height={dataHeight}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

BaseBox.propTypes = {
  /**
   * TabIndex for Box
   */
  tabIndex: PropTypes.number,
  /**
   * Role of the Box
   */
  role: PropTypes.string,
  /**
   * ariaLabel of the Box
   */
  ariaLabel: PropTypes.string,
  /**
   * ariaLabelledBy of the Box
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * ariaDescribedBy of the Box
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * ariaLive of the Box
   */
  ariaLive: PropTypes.string,
  /**
   * aria-hidden of the Box.
   */
  ariaHidden: PropTypes.bool,
  /**
   * Direction of component
   */
  direction: PropTypes.string,
  /**
   * onClick event
   */
  onClick: PropTypes.func,
  /**
   * onMouseEnter function.
   */
  onMouseEnter: PropTypes.func,
  /**
   * onMOuseLeave function.
   */
  onMouseLeave: PropTypes.func,
  /**
   * onMouseDown function.
   */
  onMouseDown: PropTypes.func,
  /**
   * onMouseMove function.
   */
  onMouseMove: PropTypes.func,
  /**
   * onFocus function.
   */
  onFocus: PropTypes.func,
  /**
   * onBlur function.
   */
  onBlur: PropTypes.func,
  /**
   * onKeyDown function.
   */
  onKeyDown: PropTypes.func,
  /**
   * onScroll function
   */
  onScroll: PropTypes.func,
  /**
   * Icon to show in component
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Component id
   */
  id: PropTypes.string,
  /**
   * Disabled box.
   */
  disabled: PropTypes.bool,
  /**
   * Title of the box.
   */
  title: PropTypes.string,
  /**
   * Focus references
   */
  focusReferences: PropTypes.func,
  /**
   * Data height
   */
  dataHeight: PropTypes.string,
  /**
   * Data test ID of Box
   */
  dataTestId: PropTypes.string,
  /**
   * className in the box
   */
  className: PropTypes.string,
  /**
   * style on the Box
   */
  style: PropTypes.objectOf(PropTypes.any)
};

BaseBox.defaultProps = {};

export default BaseBox;
