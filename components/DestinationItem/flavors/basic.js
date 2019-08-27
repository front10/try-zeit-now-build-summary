export default {
  style: {
    background: "-webkit-linear-gradient(170deg, #ffec32 28%, #efefef 28%)"
  },
  rounded: "3",
  padding: "3",
  marginHeight: "1",
  fontWeight: "bold",
  fareBodyItem: {
    flex: "2",
    display: "flex",
    flexDirection: "column"
  },
  fareFooterItem: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end"
  },
  destinationStyles: {
    fontSize: "5",
    textTransform: "uppercase",
    marginBottom: "auto"
  },
  departureReturnDateStyles: {
    separator: "-",
    separatorStyles: {
      paddingWidth: "1"
    }
  },
  rocketTypeStyles: {
    separator: "|",
    separatorStyles: {
      paddingWidth: "2"
    }
  },
  callToActionStyles: {
    callToActionText: "Let's go",
    color: "primary",
    fontWeight: "bold",
    textTransform: "uppercase",
    rounded: "0",
    paddingWidth: "5"
  },
  priceStyles: {
    width: "100",
    textAlign: "center",
    fontSize: "6",
    marginBottom: "3",
    currencySymbolStyles: {
      marginRight: "1"
    }
  }
};
