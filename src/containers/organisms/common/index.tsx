import { FC } from "react";
import Header from "../../../components/molecules/header";
import styled from "styled-components";

const Common: FC<{ children: any; url: "home" | "blog" | "docs" }> = ({
  children,
  url
}) => {
  return (
    <Base>
      <Nav>
        <Header
          contents={[
            {
              label: "home",
              target: "",
              selected: url === "home"
            },
            {
              label: "docs",
              target: "docs",
              selected: url === "docs"
            },
            {
              label: "blog",
              target: "blog",
              selected: url === "blog"
            }
          ]}
        />
      </Nav>
      <Body>{children}</Body>
    </Base>
  );
};

const Nav = styled.div`
  position: fixed;
  height: 20px;
  width: 100%;
  @media (max-width: 1000px) {
    padding-top: -10px;
  }
  @media (min-width: 1000px) {
  }
  z-index: 9999;
`;

const Body = styled.div`
  padding-top: 50px;
`;

const Base = styled.div`
  width: calc(100%);
`;

export default Common;
