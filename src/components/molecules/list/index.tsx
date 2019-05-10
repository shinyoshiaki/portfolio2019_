import { FC } from "react";
import styled from "styled-components";

const List: FC<{ items: { label: string; value: string }[] }> = ({ items }) => {
  const labels = items.map(v => v.label);
  const values = items.map(v => v.value);
  return (
    <Base>
      <div>
        {labels.map((v, i) => (
          <Label key={i}>{v}</Label>
        ))}
      </div>
      <div>
        {values.map((v, i) => (
          <Value key={i}>{v}</Value>
        ))}
      </div>
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 19px;
`;

const Label = styled.div`
  font-weight: bold;
  margin: 10px;
`;

const Value = styled.div`
  margin: 10px;
  color: #3f51b5;
`;

export default List;
