import React from "react";
import PropTypes from "prop-types";
import useStyles from "@front10/helpers/dist/UseStyles";

import Box from "../Box";
import Text from "../Text";

const DepartureReturnDateAtom = props => {
  const [className, style] = useStyles(props);
  const {
    departureDate,
    returnDate,
    separator,
    showDepartureDate,
    showReturnDate,
    showSeparator,
    departureDateStyles,
    returnDateStyles,
    separatorStyles
  } = props;

  return (
    <Box className={className} style={style}>
      {showDepartureDate && (
        <Text {...departureDateStyles}>{departureDate}</Text>
      )}
      {showSeparator && showDepartureDate && showReturnDate && (
        <Text {...separatorStyles}>{separator}</Text>
      )}
      {showReturnDate && <Text {...returnDateStyles}>{returnDate}</Text>}
    </Box>
  );
};

DepartureReturnDateAtom.propTypes = {
  departureDate: PropTypes.string,
  returnDate: PropTypes.string,
  separator: PropTypes.stirng,
  showDepartureDate: PropTypes.bool,
  showReturnDate: PropTypes.bool,
  showSeparator: PropTypes.bool,
  departureDateStyles: PropTypes.objectOf(PropTypes.any),
  returnDateStyles: PropTypes.objectOf(PropTypes.any),
  separatorStyles: PropTypes.objectOf(PropTypes.any)
};

DepartureReturnDateAtom.defaultProps = {
  departureDate: "",
  returnDate: "",
  separator: "",
  showDepartureDate: true,
  showReturnDate: true,
  showSeparator: true,
  departureDateStyles: {},
  returnDateStyles: {},
  separatorStyles: {}
};

export default DepartureReturnDateAtom;
