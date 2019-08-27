import Head from "next/head";
import React from "react";
import DestinationSpace from "../components/DestinationSpace";
import Text from "../components/Text";
import Box from "../components/Box";
import settings from "../settings";
import data from "../helpers/data.json";

const Home = () => (
  <div>
    <Head>
      <title>Destination Space</title>
      <link
        href="https://cdn.front10.com/bootstrap4/index.min.css"
        rel="stylesheet"
      />
    </Head>
    <div className="layout">
      <div className="container">
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
        <DestinationSpace {...settings.destinationSpace} data={data} />
        <Box textAlign="center">
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
        .container {
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
