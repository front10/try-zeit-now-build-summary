export default {
  style: {
    background: "-webkit-linear-gradient(170deg, #000000 28%, #ffffff 28%)"
  },
  border: true,
  borderWidth: "1",
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
    justifyContent: "end",
    textColor: "white"
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
    textColor: "black",
    color: "none",
    fontWeight: "bold",
    textTransform: "uppercase",
    rounded: "0",
    paddingWidth: "5",
    style: {
      backgroundColor: "#f8cf34",
      borderColor: "black"
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
