import React from "react";
import PropTypes from "prop-types";
import useStyles from "@front10/helpers/dist/UseStyles";

import Box from "../../Box";
import Text from "../../Text";

const PriceAtom = props => {
  const [className, style] = useStyles(props);
  const {
    currencySymbol,
    price,
    currencyCode,
    showCurrencySymbol,
    showPrice,
    showCurrencyCode,
    currencySymbolStyles,
    priceStyles,
    currencyCodeStyles
  } = props;

  return (
    <Box className={className} style={style}>
      {showCurrencySymbol && (
        <Text {...currencySymbolStyles}>{currencySymbol}</Text>
      )}
      {showPrice && <Text {...priceStyles}>{price}</Text>}
      {showCurrencyCode && <Text {...currencyCodeStyles}>{currencyCode}</Text>}
    </Box>
  );
};

PriceAtom.propTypes = {
  currencySymbol: PropTypes.string,
  price: PropTypes.string,
  currencyCode: PropTypes.string,
  showCurrencySymbol: PropTypes.bool,
  showPrice: PropTypes.bool,
  showCurrencyCode: PropTypes.bool,
  currencySymbolStyles: PropTypes.objectOf(PropTypes.any),
  priceStyles: PropTypes.objectOf(PropTypes.any),
  currencyCodeStyles: PropTypes.objectOf(PropTypes.any)
};

PriceAtom.defaultProps = {
  currencySymbol: "",
  price: "",
  currencyCode: "",
  showCurrencySymbol: true,
  showPrice: true,
  showCurrencyCode: true,
  currencySymbolStyles: {},
  priceStyles: {},
  currencyCodeStyles: {}
};

export default PriceAtom;
