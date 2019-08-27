export default {
  destinationSpace: {
    image:
      "https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    name: "The Space",
    imageProps: {
      labelStyle: {
        fontSize: "8",
        textTransform: "uppercase",
        fontWeight: "bold",
        textColor: "white"
      },
      rounded: "3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    header: {
      fontWeight: "bold",
      marginTop: "2"
    },
    componentSettings: {
      itemSettings: {
        flavor: "yellowInverted",
        // here
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
      }
    },
    data: [
      {
        destination: "To Mars",
        departureDate: "03/13/2020",
        returnDate: "04/04/2020",
        rocket: "Falcon 9",
        weight: 4020,
        measureUnit: "kg",
        price: "62",
        currencySymbol: "$",
        currencyCode: "M"
      },
      {
        destination: "To Saturn",
        departureDate: "07/13/2020",
        returnDate: "09/09/2020",
        rocket: "Falcon Heavy",
        weight: 168000,
        measureUnit: "kg",
        price: "90",
        currencySymbol: "$",
        currencyCode: "M"
      },
      {
        destination: "To Jupiter",
        departureDate: "11/13/2020",
        returnDate: "10/03/2020",
        rocket: "Dragon",
        weight: 6000,
        measureUnit: "kg",
        price: "78",
        currencySymbol: "$",
        currencyCode: "M"
      }
    ]
  }
};
