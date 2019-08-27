import React from "react";
import PropTypes from "prop-types";
import useStyles from "@front10/helpers/dist/UseStyles";
import Withflavors from "../../helpers/WithFlavors";

import Box from "../Box";
import Text from "../Text";
import Button from "../Button";

const DestinationItem = props => {
  const [className, style] = useStyles(props);

  return (
    <Box className="DestinationItem" className={className} style={style}></Box>
  );
};

DestinationItem.propTypes = {
  showDestination: PropTypes.bool,

  showDepartureReturnDate: PropTypes.bool,

  showRocketType: PropTypes.bool,

  showPrice: PropTypes.bool,

  showCallToAction: PropTypes.bool,

  departureReturnDateStyles: PropTypes.objectOf(PropTypes.any),

  destinationStyles: PropTypes.objectOf(PropTypes.any),

  rocketTypeStyles: PropTypes.objectOf(PropTypes.any),

  priceStyles: PropTypes.objectOf(PropTypes.any),

  callToActionStyles: PropTypes.objectOf(PropTypes.any),

  fareBodyItem: PropTypes.objectOf(PropTypes.any),

  fareFooterItem: PropTypes.objectOf(PropTypes.any),

  data: PropTypes.objectOf(PropTypes.any)
};

DestinationItem.defaultProps = {
  showDestination: true,

  showDepartureReturnDate: true,

  showRocketType: true,

  showPrice: true,

  showCallToAction: true,

  departureReturnDateStyles: {},

  destinationStyles: {},

  rocketTypeStyles: {},

  priceStyles: {},

  callToActionStyles: {},

  fareBodyItem: {},

  fareFooterItem: {},

  data: {}
};

export default Withflavors(DestinationItem);
