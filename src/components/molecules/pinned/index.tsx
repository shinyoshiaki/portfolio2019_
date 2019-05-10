import { FC } from "react";

import styled from "styled-components";
import { Card } from "../../atoms/styled";
import { PinnedRepo } from "../../../modules/github";

type Props = { pinned: PinnedRepo };

const Pinned: FC<Props> = ({ pinned }) => {
  return (
    <Card>
      <Title href={pinned.url} target="_blank">
        {pinned.name}
      </Title>
      {pinned.description}
    </Card>
  );
};

const Title = styled.a`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #3f51b5;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
  :visited {
    color: #3f51b5;
  }
`;

export default Pinned;
