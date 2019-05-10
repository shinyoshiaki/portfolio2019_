import React, { FC } from "react";
import styled from "styled-components";

const Base = styled.li`
  display: inline-block;
  padding: 0.2em 1em;
  text-decoration: none;
  min-width: 80px;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
  border-color: black;
  background-image: #b0c9ff;
  transition: 0.4s;
  &:hover {
    background-image: #b0c9ff;
    cursor: pointer;
  }
  text-align: center;
`;

const Button: FC<{
  children: string;
  onClick: () => void;
  style?: React.CSSProperties;
}> = ({ children, onClick, style }) => {
  return (
    <Base onClick={onClick} style={style}>
      {children}
    </Base>
  );
};

export default Button;
