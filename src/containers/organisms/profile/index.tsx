import { FC } from "react";
import { StateTwitter } from "../../../modules/twitter";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import styled from "styled-components";
import { Card, Title } from "../../../components/atoms/styled";

type Props = {} & StateTwitter;

const Profile: FC<Props> = ({ profile }) => {
  return (
    <Card>
      <Container>
        <Icon src={profile.img} alt={profile.img} />
        <Title style={{ fontSize: 30 }}>Shin Yoshiaki</Title>
      </Container>
      <Text>{profile.desc}</Text>
    </Card>
  );
};

const Icon = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-size: 18px;
`;

export default connect((state: ReduxState) => {
  return { ...state.twitter };
})(Profile);
