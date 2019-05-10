import { FC } from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const SocialLinks: FC = () => {
  return (
    <Card>
      <div style={{ display: "flex" }}>
        <Content href={"https://twitter.com/ShinYoshiaki"} target="_blank">
          <FaTwitter size={20} />
          {" shinyoshiaki"}
        </Content>
        <Content href={"https://github.com/shinyoshiaki"} target="_blank">
          <FaGithub size={20} />
          {" shinyoshiaki"}
        </Content>
      </div>
    </Card>
  );
};

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 20px;
`;

const Content = styled.a`
  margin-right: 30px;
  height: 30px;
`;

export default SocialLinks;
