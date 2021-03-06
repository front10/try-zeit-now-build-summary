import Head from "next/head";
import React from "react";
import globalStyles from "../styles/global.js";
import DestinationSpace from "../components/DestinationSpace";
import Nav from "../components/nav";
import Text from "../components/Text";
import Box from "../components/Box";
import data from "../helpers/data.json";

const Home = () => (
  <div>
    <Head>
      <title>Destination Space</title>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/front10.ico"
      />
      <link
        href="https://cdn.front10.com/bootstrap4/index.min.css"
        rel="stylesheet"
      />
    </Head>
    <Nav />
    <div className="layout">
      <div className="tiny-container fr-py-3">
        <DestinationSpace
          components={{
            imageHeader: {
              image:
                "https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=814&q=80",
              title: "From EARTH",
              labelStyle: {
                fontSize: "8",
                textTransform: "uppercase",
                textColor: "white",
                fontWeight: "bold"
              },
              imageBgPos: "center",
              rounded: "3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            destinationItem: {
              //-------------------------------------------------
              // flavor: basic | dark | yellow | yellowInverted
              //-------------------------------------------------
              flavor: "basic",
              padding: "3",
              marginHeight: "1",
              //-------------------------------------------------
              // bgColor: primary | secondary | danger
              //-------------------------------------------------
              bgColor: "white",
              border: true,
              fontWeight: "normal",
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
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "auto"
              },
              departureReturnDateStyles: {
                separator: "-",
                separatorStyles: {
                  paddingWidth: "1"
                },
                style: {
                  lineHeight: 2
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
                paddingWidth: "5",
                paddingHeight: "2"
              },
              priceStyles: {
                width: "100",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "3",
                currencySymbolStyles: {
                  marginWidth: "1"
                }
              }
            }
          }}
          data={data}
        />
      </div>
    </div>
    <Box textAlign="center" marginTop="4">
      <Text>
        Made with 🖤 by{" "}
        <a target="_blank" href="http://front10.com">
          Front10
        </a>
      </Text>
    </Box>

    <style jsx global>
      {globalStyles}
    </style>
  </div>
);

export default Home;
