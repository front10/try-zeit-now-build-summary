import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import DestinationSpace from "../components/base-ui/containers/DestinationSpace";
import Row from "../components/base-ui/elements/Row";
import Col from "../components/base-ui/elements/Col";

const Home = () => (
  <div>
    <Head>
      <title>Destination Space</title>
      <link
        href="https://cdn.front10.com/bootstrap4/index.min.css"
        rel="stylesheet"
      />
    </Head>

    <div className="hero">
      <h1 className="title">Welcome to Destination Space!</h1>
      <Row>
        <Col md="6">
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
                flavor: "fareItemPopularDestinations",
                padding: "0",
                fareFooterItem: {
                  padding: "2",
                  style: {
                    background:
                      "-webkit-linear-gradient(170deg, #ffec32 80%, #ffffff 80%)",
                    borderRadius: "0px 6px 6px 0px"
                  }
                },
                fareBodyItem: {
                  padding: "2"
                },
                fareItemCallToAction: {
                  rounded: "0",
                  style: { minWidth: "175px" }
                }
              }
            }}
            data={[
              {
                totalPrice: 895.97,
                origin: "YYZ",
                destination: "FCO",
                searchDate: "2019-02-24T09:10:16.689+00:00",
                journeyType: "rt",
                flightDeltaDays: 7,
                travelClass: "Economy",
                returnDate: "2020-01-15",
                siteEdition: "en-ca",
                farenetTravelClass: "Economy",
                airlineCode: "ac",
                departureDate: "2020-01-08",
                usdTotalPrice: 683.72473,
                currencyCode: "USD",
                formattedTotalPrice: "896",
                formattedUsdTotalPrice: "684",
                formattedDepartureDate: "13/03/2019",
                formattedReturnDate: "20/03/2019",
                originCity: "Toronto",
                originCityImage:
                  "https:media.jtdwjcwq6f4wp4ce.com/library/cities/toronto-YYZ.jpg"
              },
              {
                totalPrice: 899.21,
                origin: "YUL",
                destination: "FCO",
                searchDate: "2019-02-24T00:06:24.670+00:00",
                journeyType: "rt",
                flightDeltaDays: 7,
                travelClass: "Economy",
                returnDate: "2020-01-21",
                siteEdition: "en-ca",
                farenetTravelClass: "Economy",
                airlineCode: "ac",
                departureDate: "2020-01-14",
                usdTotalPrice: 686.19727,
                currencyCode: "USD",
                formattedTotalPrice: "899",
                formattedUsdTotalPrice: "686",
                formattedDepartureDate: "Jan 14, 2020",
                formattedReturnDate: "Jan 21, 2020",
                originCity: "Montreal",
                originCityImage:
                  "https:media.jtdwjcwq6f4wp4ce.com/library/cities/montreal-YUL.jpg"
              },
              {
                totalPrice: 104.03,
                origin: "YHZ",
                destination: "FCO",
                searchDate: "2019-02-25T21:48:15.205+00:00",
                journeyType: "rt",
                flightDeltaDays: 14,
                travelClass: "Economy",
                returnDate: "2019-04-15",
                siteEdition: "en-ca",
                farenetTravelClass: "Economy",
                airlineCode: "ac",
                departureDate: "2019-04-01",
                usdTotalPrice: 796.71106,
                currencyCode: "USD",
                formattedTotalPrice: "144",
                formattedUsdTotalPrice: "797",
                formattedDepartureDate: "Apr 01, 2019",
                formattedReturnDate: "Apr 15, 2019",
                originCity: "Halifax",
                originCityImage:
                  "https:media.jtdwjcwq6f4wp4ce.com/ac/Boeing787-9Dreamliner-1010.jpg"
              }
            ]}
            translate={() => {}}
          />
        </Col>
      </Row>
    </div>
  </div>
);

export default Home;
