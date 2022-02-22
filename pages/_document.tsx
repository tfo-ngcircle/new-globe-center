// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/ngc-gmbh/image/upload/f_ico/v1637160501/ngc/favicon_qyrde1.ico"
        />
        <link rel="stylesheet" href="https://use.typekit.net/edt7kka.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
