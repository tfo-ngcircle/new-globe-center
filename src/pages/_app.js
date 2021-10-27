import "../styles/globals.scss";
import "../styles/nprogress.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "moment/locale/de";
import Head from "next/head";
import moment from "moment";
import nProgress from "nprogress";
import { Router } from "next/router";

moment.locale("de");

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/edt7kka.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
