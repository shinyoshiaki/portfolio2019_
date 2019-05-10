import { FC } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { StateGithub } from "../../../modules/github";
import { Title, Card } from "../../../components/atoms/styled";
import Pinned from "../../../components/molecules/pinned";
import styled from "styled-components";

type Props = StateGithub;

const PinnedList: FC<Props> = ({ pinned }) => {
  return (
    <Card>
      <Title style={{ fontSize: 25 }}>Github</Title>
      {pinned.map(v => (
        <Pinned pinned={v} key={v.name} />
      ))}
      <ShowMore href="https://github.com/shinyoshiaki" target="_blank">
        show more
      </ShowMore>
    </Card>
  );
};

export default connect((state: ReduxState) => {
  return { ...state.github };
})(PinnedList);

const ShowMore = styled.a`
  margin: 30px;
  text-decoration: none;

  background-color: transparent;
  border-radius: 0.35em;
  border: 3px solid #efefef;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  height: 3.15em;
  line-height: 2.75em;
  min-width: 10em;
  padding: 0 1.5em;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  color: #6d7379;
  :visited {
    color: #6d7379;
  }
`;
