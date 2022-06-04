import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="br">
        <Head />
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
