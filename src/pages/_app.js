import "../styles/globals.scss";
import "../styles/nprogress.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "moment/locale/de";
import App from "next/app";
import Head from "next/head";
import nProgress from "nprogress";
import { Router } from "next/router";
import { createContext } from "react";
import { global } from "src/data";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/edt7kka.css" />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/ngc-gmbh/image/upload/f_ico/v1637160501/ngc/favicon_qyrde1.ico"
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
