import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from "../../lib/fpixel";
// import { GTM_ID } from "../../lib/gtm";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="br">
        <Head>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          {/* <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript> */}
        </Head>
        <title>Maxine Lobato - Organização Barreto e Lobato</title>
        <meta
          name="Maxine Lobato - Developer FullStack"
          content="Tenha a melhor experiência em sua Landing Page"
        />
        <link rel="icon" href="favicon.ico" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
