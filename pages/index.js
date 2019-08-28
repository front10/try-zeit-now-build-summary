import Head from "next/head";
import React from "react";
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
              //---------------------
              flavor: "basic",
              rounded: "3",
              padding: "3",
              marginHeight: "1",
              bgColor: "white",
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
                fontSize: "5",
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
                rounded: "2",
                paddingWidth: "5",
                paddingHeight: "2",
                border: false
              },
              priceStyles: {
                width: "100",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "6",
                marginBottom: "3",
                currencySymbolStyles: {
                  marginRight: "1"
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
          background-image: linear-gradient(
              rgba(227, 227, 227, 0.7) 0.01em,
              transparent 0.1em
            ),
            linear-gradient(
              90deg,
              rgba(236, 236, 236, 0.7) 0.01em,
              transparent 0.1em
            );
          background-size: 2em 2em;
        }
        .tiny-container {
          width: 600px;
        }
        .logo {
          vertical-align: -5px;
          border-radius: 4px;
          margin-right: 0.5ch;
        }
        a {
          color: #067df7;
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

export default Home;
