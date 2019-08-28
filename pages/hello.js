import Head from "next/head";
import React from "react";
import Nav from "../components/nav";
import Text from "../components/Text";
import Box from "../components/Box";
import Header from "../components/Header";


const Hello = () => (
  <div>
    <Head>
      <title>Hello page</title>
      <link rel="shortcut icon" type="image/x-icon" href="/static/front10.ico" />
      <link
        href="https://cdn.front10.com/bootstrap4/index.min.css"
        rel="stylesheet"
      />
    </Head>
    <Nav/>
    <div className="layout">
      <div className="tiny-container fr-pt-3">
        <Box textAlign="center" marginBottom="400px">
          <Header content="Hello" fontSize="54px"/>
        </Box>        
        <Box textAlign="center" marginTop="4">
          <Text>Made with 🖤 by <a href="http://front10.com">Front10</a></Text>
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
          background-image: linear-gradient(rgba(227, 227, 227, 0.7) .01em, transparent .1em), linear-gradient(90deg, rgba(236, 236, 236, 0.7) .01em, transparent .1em);
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

export default Hello;