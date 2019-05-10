import React, { FC } from "react";
import { ReduxState } from "../../../modules/createStore";
import { connect } from "react-redux";
import { StateGithub } from "../../../modules/github";
import PieChart from "../../../components/molecules/githubpie";
import styled from "styled-components";
import { Card, Title } from "../../../components/atoms/styled";
import Table from "../../../components/molecules/table";
import Fit from "../../../utill/fit";

type Props = {} & StateGithub;

const Skill: FC<Props> = ({ repos }) => {
  return (
    <Card>
      <Title style={{ fontSize: 25 }}>My Program Languages in Github</Title>
      <Container>
        <Table
          labels={["language", "num"]}
          items={repos.map(v => [v.type, v.count.toString()])}
        />
        <div style={{ padding: 10, width: "100%" }}>
          <Fit
            target={size => {
              const want = 600;
              const num = size.width < want ? size.width : want;
              return <PieChart data={repos} width={num} height={num} />;
            }}
          />
        </div>
      </Container>
    </Card>
  );
};

export default connect((state: ReduxState) => {
  return { ...state.github };
})(Skill);

const Container = styled.div`
  @media (max-width: 1000px) {
  }
  @media (min-width: 1000px) {
    display: flex;
  }
`;
