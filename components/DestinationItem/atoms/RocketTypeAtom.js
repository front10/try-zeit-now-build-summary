import React from "react";
import PropTypes from "prop-types";
import useStyles from "@front10/helpers/dist/UseStyles";

import Box from "../../Box";
import Text from "../../Text";

const RocketTypeAtom = props => {
  const [className, style] = useStyles(props);
  const {
    rocket,
    weight,
    measureUnit,
    separator,
    showRocket,
    showWeight,
    showMeasureUnit,
    showSeparator,
    rocketStyles,
    weightStyles,
    measureUnitStyles,
    separatorStyles
  } = props;

  return (
    <Box className={className} style={style}>
      {showRocket && <Text {...rocketStyles}>{rocket}</Text>}
      {showSeparator && showRocket && showWeight && showMeasureUnit && (
        <Text {...separatorStyles}>{separator}</Text>
      )}
      {showWeight && <Text {...weightStyles}>{weight}</Text>}
      {showMeasureUnit && <Text {...measureUnitStyles}>{measureUnit}</Text>}
    </Box>
  );
};

RocketTypeAtom.propTypes = {
  rocket: PropTypes.string,
  weight: PropTypes.string,
  measureUnit: PropTypes.string,
  separator: PropTypes.string,
  showRocket: PropTypes.bool,
  showWeight: PropTypes.bool,
  showMeasureUnit: PropTypes.bool,
  showSeparator: PropTypes.bool,
  rocketStyles: PropTypes.objectOf(PropTypes.any),
  weightStyles: PropTypes.objectOf(PropTypes.any),
  measureUnitStyles: PropTypes.objectOf(PropTypes.any),
  separatorStyles: PropTypes.objectOf(PropTypes.any)
};

RocketTypeAtom.defaultProps = {
  rocket: "",
  weight: "",
  measureUnit: "",
  separator: "",
  showRocket: true,
  showWeight: true,
  showMeasureUnit: true,
  showSeparator: true,
  rocketStyles: {},
  weightStyles: {},
  measureUnitStyles: {},
  separatorStyles: {}
};

export default RocketTypeAtom;
