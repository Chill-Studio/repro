import NextDocument, {
  Html,
  Head,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
  Main,
} from "next/document";
import i18nextConfig from "../next-i18next.config";

class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <title>Title</title>
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter/inter-v12-latin-regular.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
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

export default Document;
