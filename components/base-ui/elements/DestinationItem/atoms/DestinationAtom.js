import React from "react";
import PropTypes from "prop-types";
import useStyles from "@front10/helpers/dist/UseStyles";

import Box from "../Box";
import Text from "../Text";

const DestinationAtom = props => {
  const [className, style] = useStyles(props);
  const { destination, destinationLabelStyles } = props;

  return (
    <Box className={className} style={style}>
      <Text {...destinationLabelStyles}>{destination}</Text>
    </Box>
  );
};

DestinationAtom.propTypes = {
  destination: PropTypes.string,
  destinationLabelStyles: PropTypes.objectOf(PropTypes.any)
};

DestinationAtom.defaultProps = {
  destination: "",
  destinationLabelStyles: {}
};

export default DestinationAtom;
