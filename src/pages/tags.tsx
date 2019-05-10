import * as React from "react";
import Articlelist from "../containers/organisms/articlelist";
import Common from "../containers/organisms/common";
import { Dispatch } from "redux";
import { ReduxState } from "../modules/createStore";
import {
  stateContentful,
  setArticles,
  StateContentful
} from "../modules/contentful";
import { connect } from "react-redux";
import { Title } from "../components/atoms/styled";

class Tags extends React.Component<
  {
    dispatch: Dispatch;
    pageProps: any;
    tag: string;
  },
  {}
> {
  static async getInitialProps(props: { query: { id: string } }) {
    const pageProps: Partial<ReduxState> = {
      contentful: stateContentful
    };
    const data = await import("../data.json");

    const tag = props.query.id;

    const contentful: StateContentful = {
      ...data.contentful,
      articles: data.contentful.articles.filter(v => v.tag.includes(tag))
    };

    pageProps.contentful = contentful;

    return { pageProps, tag };
  }

  componentWillMount() {
    const { pageProps, dispatch } = this.props;

    const props: ReduxState = pageProps;

    dispatch(setArticles(props.contentful.articles));
  }

  render() {
    return (
      <Common url="blog">
        <Title>{this.props.tag}</Title>
        <Articlelist />
      </Common>
    );
  }
}

export default connect(() => {
  return {};
})(Tags);
