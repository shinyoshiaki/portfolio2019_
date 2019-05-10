import { FC } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import styled from "styled-components";
import { Card } from "../../../components/atoms/styled";
import { StateContentful } from "../../../modules/contentful";
import Tag from "../../../components/atoms/tag";

type Props = {} & StateContentful;

const TagList: FC<Props> = ({ tags }) => {
  return (
    <Card style={{ height: "auto", margin: 10 }}>
      <Title>tag</Title>
      <Base>
        {tags.map(v => (
          <Tag key={v} style={{ width: "auto" }}>
            {v}
          </Tag>
        ))}
      </Base>
    </Card>
  );
};

const Base = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
  }
  @media (min-width: 1000px) {
    flex-direction: column;
    width: 200px;
  }
`;

export const Title = styled.p`
  color: #ea6994;
  font-weight: bold;
  font-size: 20px;
`;

export default connect((state: ReduxState) => {
  return { ...state.contentful };
})(TagList);
