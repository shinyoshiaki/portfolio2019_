import App, { Container } from "next/app";
import React from "react";

import { Provider } from "react-redux";
import withReduxStore from "../lib/with-redux-store";
import { Store } from "redux";

class MyApp extends App<{
  reduxStore: Store;
  pageProps: any;
}> {
  constructor() {
    // @ts-ignore
    super();
  }

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <nav />
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
        <footer />
      </Container>
    );
  }
}

export default withReduxStore(MyApp as any);
