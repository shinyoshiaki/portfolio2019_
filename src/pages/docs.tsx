import * as React from "react";
import Common from "../containers/organisms/common";
import { Dispatch } from "redux";
import { ReduxState } from "../modules/createStore";
import { connect } from "react-redux";
import styled from "styled-components";
import { stateSpeakerdeck, setUrls } from "../modules/speakerdeck";
import Speakerdecklist from "../containers/organisms/speakerdecklist";

class Docs extends React.Component<
  {
    dispatch: Dispatch;
    pageProps: any;
  },
  {}
> {
  static async getInitialProps() {
    const pageProps: Partial<ReduxState> = {
      speakerdeck: stateSpeakerdeck
    };
    const data = await import("../data.json");
    pageProps.speakerdeck = data.speakerdeck;

    return { pageProps };
  }

  componentWillMount() {
    const { pageProps, dispatch } = this.props;

    const props: ReduxState = pageProps;
    console.log(props.speakerdeck.urls);
    dispatch(setUrls(props.speakerdeck.urls));
  }

  render() {
    return (
      <Common url="docs">
        <Speakerdecklist />
      </Common>
    );
  }
}

export default connect(() => {
  return {};
})(Docs);
