import * as React from "react";
import Document, {
  NextDocumentContext,
  Main,
  NextScript,
  Head
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <html lang="ja">
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <header title="portfolio" />
            <head>
              <title>portfolio</title>
            </head>
            <body style={{ margin: 0, padding: 0, color: "#222222" }}>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </body>
          </html>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
