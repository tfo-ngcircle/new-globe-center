import "../styles/globals.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";

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
