import Head from "next/head";
import React from "react";
import DestinationSpace from "../components/DestinationSpace";
import Col from "../components/Col";
import Row from "../components/Row";
import Text from "../components/Text";
import Box from "../components/Box";

const Home = () => (
  <div>
    <Head>
      <title>Destination Space</title>
      <link
        href="https://cdn.front10.com/bootstrap4/index.min.css"
        rel="stylesheet"
      />
    </Head>
    <div className="fr-container-fluid">
      <div className="fr-row">
        <div className="fr-col-lg-6 fr-offset-lg-3 fr-col-xl-4 fr-offset-xl-4">
          <h1 className="title fr-text-secondary">
            <img
              className="logo"
              with="32"
              height="32"
              alt=""
              src="/static/front10.png"
            />
            Build summary in the space
          </h1>
          <DestinationSpace
            image="https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            name="The Space"
            imageProps={{
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
            }}
            header={{
              fontWeight: "bold",
              marginTop: "2"
            }}
            componentSettings={{
              itemSettings: {
                flavor: "yellowInverted"
              }
            }}
            data={[
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
            ]}
          />
          <Box textAlign="center">
            <Text>Made with 🖤 by Front10</Text>
          </Box>
        </div>
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
