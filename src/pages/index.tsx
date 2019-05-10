import * as React from "react";
import Profile from "../containers/organisms/profile";
import Common from "../containers/organisms/common";
import styled from "styled-components";
import Skill from "../containers/organisms/skill";
import { connect } from "react-redux";
import { ReduxState } from "../modules/createStore";
import { stateTwitter, setProfile } from "../modules/twitter";
import { stateGithub, setRepos, setPinned } from "../modules/github";

import { Dispatch } from "redux";
import SocialLinks from "../components/molecules/sociallinks";
import Pinnedlist from "../containers/organisms/pinnedlist";
import History from "../containers/organisms/history";

class Home extends React.Component<
  {
    dispatch: Dispatch;
    pageProps: any;
  },
  {}
> {
  static async getInitialProps() {
    const pageProps: Partial<ReduxState> = {
      twitter: stateTwitter,
      github: stateGithub
    };

    const data = await import("../data.json");
    pageProps.twitter = data.twitter;
    pageProps.github = data.github;

    return { pageProps };
  }

  componentWillMount() {
    const { pageProps, dispatch } = this.props;

    const props: ReduxState = pageProps;

    dispatch(setProfile(props.twitter.profile));
    dispatch(setRepos(props.github.repos));
    dispatch(setPinned(props.github.pinned));
  }

  render() {
    return (
      <Common url="home">
        <Base>
          <Left>
            <Profile />
            <SocialLinks />
          </Left>
          <Content>
            <History />
            <Pinnedlist />
            <Skill />
          </Content>
        </Base>
      </Common>
    );
  }
}

export default connect(() => {
  return {};
})(Home);

const Base = styled.div`
  @media (max-width: 1000px) {
  }
  @media (min-width: 1000px) {
    display: flex;
    height: calc(100vh - 50px);
    overflow: hidden;
  }
`;

const Left = styled.div`
  margin: 10px;
  @media (max-width: 1000px) {
    width: calc(100%-10px);
  }
  @media (min-width: 1000px) {
    width: 40%;
  }
`;

const Content = styled.div`
  @media (max-width: 1000px) {
    width: calc(100%-10px);
  }
  @media (min-width: 1000px) {
    flex: 1;
    overflow-y: scroll;
  }
  margin: 10px;
`;
