import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html lang="de">
        <Head>
          <link
            rel="shortcut icon"
            href="https://res.cloudinary.com/ngc-gmbh/image/upload/f_ico/v1637160501/ngc/favicon_qyrde1.ico"
          />
          <link rel="stylesheet" href="https://use.typekit.net/edt7kka.css" />
          <link
            rel="author"
            href={`https://${process.env.NEXT_PUBLIC_HOST_NAME}/humans.txt`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
