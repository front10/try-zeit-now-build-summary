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
    meassureUnit,
    separator,
    showRocket,
    showWeight,
    showMeassureUnit,
    showSeparator,
    rocketStyles,
    weightStyles,
    meassureUnitStyles,
    separatorStyles
  } = props;

  return (
    <Box className={className} style={style}>
      {showRocket && <Text {...rocketStyles}>{rocket}</Text>}
      {showSeparator && showRocket && showWeight && showMeassureUnit && (
        <Text {...separatorStyles}>{separator}</Text>
      )}
      {showWeight && <Text {...weightStyles}>{weight}</Text>}
      {showMeassureUnit && <Text {...meassureUnitStyles}>{meassureUnit}</Text>}
    </Box>
  );
};

RocketTypeAtom.propTypes = {
  rocket: PropTypes.string,
  weight: PropTypes.string,
  meassureUnit: PropTypes.string,
  separator: PropTypes.string,
  showRocket: PropTypes.bool,
  showWeight: PropTypes.bool,
  showMeassureUnit: PropTypes.bool,
  showSeparator: PropTypes.bool,
  rocketStyles: PropTypes.objectOf(PropTypes.any),
  weightStyles: PropTypes.objectOf(PropTypes.any),
  meassureUnitStyles: PropTypes.objectOf(PropTypes.any),
  separatorStyles: PropTypes.objectOf(PropTypes.any)
};

RocketTypeAtom.defaultProps = {
  rocket: "",
  weight: "",
  meassureUnit: "",
  separator: "",
  showRocket: true,
  showWeight: true,
  showMeassureUnit: true,
  showSeparator: true,
  rocketStyles: {},
  weightStyles: {},
  meassureUnitStyles: {},
  separatorStyles: {}
};

export default RocketTypeAtom;
