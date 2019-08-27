import React from 'react';
import useStyles from '@front10/helpers/dist/UseStyles';
import BaseBox from '../_commons/BaseBox';

const Box = props => {
  const [className, style] = useStyles(props);
  return <BaseBox {...props} className={className} style={style} />;
};

Box.componentName = 'Box';

export default Box;
