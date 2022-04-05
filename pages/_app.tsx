import "mapbox-gl/dist/mapbox-gl.css";
import "moment/locale/de";
import { DefaultSeo, OrganizationJsonLd } from "next-seo";
import App, { AppContext } from "next/app";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Router } from "next/router";
import nProgress from "nprogress";
import { createContext } from "react";
import { fetchApi } from "../lib/api";
import "../styles/globals.scss";
import { Entity, GlobalData } from "../typings";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export const GlobalContext = createContext<GlobalData>({
  siteName: "",
  header: [],
  footer: { bottomLinks: [], socialLinks: [], columns: [[]] },
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
          site_name: data.siteName,
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      {data.organization && <OrganizationJsonLd {...data.organization} />}
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);
  const entity = await fetchApi<Entity<GlobalData>>(`/global`);
  return { ...appProps, pageProps: { global: entity.data?.attributes } };
};

export default MyApp;
