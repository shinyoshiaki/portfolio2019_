import { FC } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import styled from "styled-components";
import { StateSpeakerdeck } from "../../../modules/speakerdeck";
import Speakerdeck from "../../../components/molecules/speakerdeck";

type Props = StateSpeakerdeck;

const SpeakerdeckList: FC<Props> = ({ urls }) => {
  console.log(urls);
  return (
    <Base>
      {urls.map(v => (
        <Content key={v}>
          <Speakerdeck url={v} />
        </Content>
      ))}
    </Base>
  );
};

const Base = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Content = styled.div`
  margin: 5px;
  @media (min-width: 1000px) {
    margin: 1%;
    width: 48%;
  }
`;

export default connect((state: ReduxState) => {
  return { ...state.speakerdeck };
})(SpeakerdeckList);
