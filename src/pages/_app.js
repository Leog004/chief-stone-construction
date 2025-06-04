import React from "react";
import Head from "next/head";
import appData from "@data/app.json";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>{appData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={appData.settings.siteDescription} />
          <meta name="keywords" content={appData.settings.siteKeywords} />
          <meta name="author" content={appData.settings.siteAuthor} />
          <link rel="canonical" href={appData.settings.siteUrl} />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
