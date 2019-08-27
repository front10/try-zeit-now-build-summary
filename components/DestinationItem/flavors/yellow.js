export default {
  style: {
    background: "-webkit-linear-gradient(170deg, #F8CF34 28%, #ffffff 28%)"
  },
  border: true,
  rounded: "3",
  padding: "3",
  marginBottom: "2",
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
    justifyContent: "end",
    textColor: "black"
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
    border: false,
    borderColor: "black",
    textColor: "white",
    color: "none",
    fontWeight: "bold",
    textTransform: "uppercase",
    rounded: "0",
    paddingWidth: "5",
    style: {
      backgroundColor: "black"
    }
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
