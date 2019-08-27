import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '@front10/helpers/dist/UseStyles';
import BaseBox from '../_commons/BaseBox';

const Row = props => {
  const { gutters } = props;
  const [className, style] = useStyles(props);
  const newClassName = `fr-row ${!gutters ? 'fr-no-gutters' : ''} ${className}`;
  return <BaseBox {...props} className={newClassName} style={style} />;
};

Row.propTypes = {
  /**
   * Gutters in the row
   */
  gutters: PropTypes.bool,
  /**
   * Children to show in component
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Row.defaultProps = {
  gutters: false,
  children: null
};

Row.componentName = 'Row';

export default Row;
