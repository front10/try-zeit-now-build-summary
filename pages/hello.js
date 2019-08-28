import Head from "next/head";
import React from "react";
import globalStyles from '../styles/global.js'
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
        {globalStyles}
    </style>
  </div>
);

export default Hello;