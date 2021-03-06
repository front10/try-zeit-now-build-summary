import dataMock from "../helpers/data.json";

export default {
  destinationSpace: {
    image:
      "https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    name: "The Space",
    imageProps: {
      labelStyle: {
        fontSize: "8",
        textTransform: "uppercase",
        textColor: "white"
      },
      rounded: "3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    itemSettings: {
      flavor: "yellowInverted",
      rounded: "3",
      padding: "3",
      marginHeight: "1",
      fontWeight: "bold",
      marginTop: "2"
    },
    itemSettings: {
      flavor: "dark",
      rounded: "3",
      padding: "3",
      marginHeight: "1",
      fontWeight: "bold",
      leftSectionItem: {
        flex: "2",
        display: "flex",
        flexDirection: "column"
      },
      rightSectionItem: {
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
        fontWeight: "bold",
        textTransform: "uppercase",
        rounded: "0",
        paddingWidth: "5",
        borderWidth: "0"
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
    },
    data: dataMock
  }
};
