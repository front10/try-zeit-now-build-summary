import React from "react";
import PropTypes from "prop-types";
import useStyles from "@front10/helpers/dist/UseStyles";
import WithFlavors from "../../helpers/WithFlavors";
import flavors from "./flavors";

import Box from "../Box";
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
    leftSectionItem,
    rightSectionItem,
    data
  } = props;

  return (
    <Box
      display="flex"
      className={`DestinationItem ${className}`}
      style={style}
    >
      <Box {...leftSectionItem}>
        {showDestination && <Destination {...data} {...destinationStyles} />}
        {showDepartureReturnDate && (
          <DepartureReturnDate {...data} {...departureReturnDateStyles} />
        )}
        {showRocketType && <RocketType {...data} {...rocketTypeStyles} />}
      </Box>
      <Box {...rightSectionItem}>
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
  leftSectionItem: PropTypes.objectOf(PropTypes.any),
  rightSectionItem: PropTypes.objectOf(PropTypes.any),
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
  leftSectionItem: {},
  rightSectionItem: {},
  data: {}
};

DestinationItem.flavors = flavors;

export default WithFlavors(DestinationItem);
