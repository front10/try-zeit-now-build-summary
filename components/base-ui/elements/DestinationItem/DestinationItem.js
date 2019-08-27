import React from "react";
import PropTypes from "prop-types";
import useStyles from "@front10/helpers/dist/UseStyles";
import Withflavors from "../../helpers/WithFlavors";

import Box from "../Box";
import Text from "../Text";
import Button from "../Button";
import Destination from "./atoms/DestinationAtom";
import DepartureReturnDate from "./atoms/DepartureReturnDateAtom";
import RocketType from "./atoms/RocketTypeAtom";
import Price from "./atoms/PriceAtom";
import CallToAction from "./atoms/CallToActionAtom";

const DestinationItem = props => {
  const [className, style] = useStyles(props);
  const {
    showDestination,
    showDepartureReturnDate,
    showRocketType,
    showPrice,
    showCallToAction,
    departureReturnDateStyles,
    destinationStyles,
    rocketTypeStyles,
    priceStyles,
    callToActionStyles,
    fareBodyItem,
    fareFooterItem,
    data
  } = props;

  return (
    <Box
      display="flex"
      className={`DestinationItem ${className}`}
      style={style}
    >
      <Box {...fareBodyItem}>
        {showDestination && <Destination {...data} {...destinationStyles} />}
        {showDepartureReturnDate && (
          <DepartureReturnDate {...data} {...departureReturnDateStyles} />
        )}
        {showRocketType && <RocketType {...data} {...rocketTypeStyles} />}
      </Box>
      <Box {...fareFooterItem}>
        {showPrice && <Price {...data} {...priceStyles} />}
        {showCallToAction && <CallToAction {...data} {...callToActionStyles} />}
      </Box>
    </Box>
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
