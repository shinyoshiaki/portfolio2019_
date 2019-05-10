import { FC } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { StateContentful } from "../../../modules/contentful";
import styled from "styled-components";
import ArticleThumb from "../../../components/molecules/articlethumb";

type Props = StateContentful;

const ArticleList: FC<Props> = ({ articles }) => {
  return (
    <Base>
      {articles
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map(v => (
          <Content key={v.id}>
            <ArticleThumb article={v} />
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
  return { ...state.contentful };
})(ArticleList);
