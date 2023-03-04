import React from "react";
import Head from "next/head";
import Script from "next/script";

const HeadSite = () => {
  return (
    <>
      <Head>
        <title>Floripa Bike Fit</title>
        <meta name="description" content="Floripa Bike Fit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../favicon.svg" />
        <meta name="keywords" content="Floripa Bike Fit" />
      </Head>
    </>
  );
};

export default HeadSite;
