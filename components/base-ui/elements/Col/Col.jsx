import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '@front10/helpers/dist/UseStyles';
import BaseBox from '../_commons/BaseBox';

const Col = props => {
  const { xs, sm, md, lg, xl } = props;
  const [className, style] = useStyles(props);

  let cls = '';
  if (xs) cls = `fr-col-${xs}`;
  else if (!sm && !md && !lg && !xl) cls = 'fr-col';
  if (sm) cls += ` fr-col-sm-${sm}`;
  if (md) cls += ` fr-col-md-${md}`;
  if (lg) cls += ` fr-col-lg-${lg}`;
  if (xl) cls += ` fr-col-xl-${xl}`;
  const newClassName = `${cls} ${className} `;

  return <BaseBox {...props} className={newClassName} style={style} />;
};

Col.propTypes = {
  /**
   * Col size on xs.
   */
  xs: PropTypes.oneOf(['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  /**
   * Col size on sm.
   */
  sm: PropTypes.oneOf(['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  /**
   * Col size on md.
   */
  md: PropTypes.oneOf(['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  /**
   * Col size on lg.
   */
  lg: PropTypes.oneOf(['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  /**
   * Children to show in component
   */
  xl: PropTypes.oneOf(['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  /**
   * Col size on sm.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Col.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  children: null
};

Col.componentName = 'Col';

export default Col;
