import * as React from "react";
import Articlelist from "../containers/organisms/articlelist";
import Common from "../containers/organisms/common";
import { Dispatch } from "redux";
import { ReduxState } from "../modules/createStore";
import { stateContentful, setArticles, setTags } from "../modules/contentful";
import { connect } from "react-redux";
import styled from "styled-components";
import Taglist from "../containers/organisms/taglist";

class Blog extends React.Component<
  {
    dispatch: Dispatch;
    pageProps: any;
  },
  {}
> {
  static async getInitialProps() {
    const pageProps: Partial<ReduxState> = {
      contentful: stateContentful
    };
    const data = await import("../data.json");
    pageProps.contentful = data.contentful;

    return { pageProps };
  }

  componentWillMount() {
    const { pageProps, dispatch } = this.props;

    const props: ReduxState = pageProps;

    dispatch(setArticles(props.contentful.articles));
    dispatch(setTags(props.contentful.tags));
  }

  render() {
    return (
      <Common url="blog">
        <Base>
          <Taglist />
          <Articlelist />
        </Base>
      </Common>
    );
  }
}

const Base = styled.div`
  @media (max-width: 1000px) {
  }
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
  }
`;

export default connect(() => {
  return {};
})(Blog);
