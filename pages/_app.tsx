import "../styles/globals.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import "moment/locale/de";
import App, { AppContext } from "next/app";
import nProgress from "nprogress";
import { Router } from "next/router";
import { createContext } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { GlobalData } from "../typings";
import { DefaultSeo, OrganizationJsonLd } from "next-seo";
import { fetchApi } from "../lib/api";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export const GlobalContext = createContext<GlobalData>({
  siteName: "",
  header: [],
  footer: { partners: [], bottomLinks: [], socialLinks: [], columns: [[]] },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;
  const data = global as GlobalData;

  return (
    <GlobalContext.Provider value={data}>
      <DefaultSeo
        titleTemplate={`%s • ${data.siteName}`}
        defaultTitle={data.defaultSeo?.title}
        openGraph={{
          type: "website",
          url: `https://${process.env.NEXT_PUBLIC_HOST_NAME}`,
          title: data.defaultSeo?.title,
          description: data.defaultSeo?.description,
          images: data.defaultSeo?.images?.data?.map((img) => ({
            url: img.attributes.url,
            width: img.attributes.width,
            height: img.attributes.height,
            alt: img.attributes.alternativeText,
          })),
        }}
      />
      {data.organization && <OrganizationJsonLd {...data.organization} />}
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchApi<GlobalData>(`/global`);
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
