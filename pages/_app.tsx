import "../styles/globals.scss";
import "../styles/nprogress.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "moment/locale/de";
import App, { AppContext } from "next/app";
import nProgress from "nprogress";
import { Router } from "next/router";
import { createContext } from "react";
import { global } from "../data";
import { AppProps } from "next/dist/shared/lib/router/router";
import { GlobalData } from "../typings";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export const GlobalContext = createContext<GlobalData>({
  siteName: "",
  header: [],
  footer: { partners: [], bottomLinks: [], socialLinks: [], columns: [[]] },
  defaultSeo: {
    metaTitle: "",
    metaDescription: "",
    shareImage: "",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;
  return (
    <GlobalContext.Provider value={global}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
