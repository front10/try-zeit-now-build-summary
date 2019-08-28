import Head from "next/head";
import React from "react";
import DestinationSpace from "../components/DestinationSpace";
import Text from "../components/Text";
import Box from "../components/Box";
import Title from "../components/Title";
import data from "../helpers/data.json";

const Home = () => (
  <div>
    <Head>
      <title>Destination Space</title>
      <link rel="shortcut icon" type="image/x-icon" href="/static/front10.ico" />
      <link
        href="https://cdn.front10.com/bootstrap4/index.min.css"
        rel="stylesheet"
      />
    </Head>
    <div className="layout">
      <div className="tiny-container">
        <Title text="Build summary in the space" imgSrc="/static/front10.png"/>
        <DestinationSpace 
          data={data}
          image=
          "https://res.cloudinary.com/dakp804eh/topics/space/via-lactea.jpg"
          name= "The Space"
          components={{
            imageHeader: {
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
            destinationItem: {
              flavor: "dark",
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
            }
          }}
        />
        <Box textAlign="center" marginTop="4">
          <Text>Made with 🖤 by Front10</Text>
        </Box>
      </div>
    </div>

    <style jsx global>
      {`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
        }
        .title {
          font-weight: normal;
        }
        .layout {
          display: flex;
          justify-content: center;
        }
        .tiny-container {
          width: 600px;
        }
        .logo {
          vertical-align: -5px;
          border-radius: 4px;
          margin-right: 0.5ch;
        }
      `}
    </style>
  </div>
);

export default Home;
