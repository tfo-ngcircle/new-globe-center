import "../styles/globals.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";
import "moment/locale/de";
import moment from "moment";

moment.locale("de");

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
