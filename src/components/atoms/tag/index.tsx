import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

type Props = { children: string; style?: React.CSSProperties };

const Tag: FC<Props> = ({ children, style }) => {
  return (
    <Link prefetch href={{ pathname: `/tags/${children}` }}>
      <a style={{ textDecoration: "none" }}>
        <Base style={style}>#{children}</Base>
      </a>
    </Link>
  );
};

const Base = styled.p`
  padding-right: 10px;
  color: #6b6b6b;
  background: #eeeeee;
  font-size: 12px;
  padding: 7px 12px;
  margin: 4px 8px 4px 0;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
  }
`;

export default Tag;
