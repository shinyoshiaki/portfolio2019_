import { FC } from "react";
import styled from "styled-components";

const color = "#3f51b5";

const Table: FC<{
  labels: string[];
  items: string[][];
  columns?: string[];
}> = ({ labels, items, columns }) => {
  const columnsTemp = columns
    ? columns.join(" ")
    : labels.map(() => "50%").join(" ");

  const Base = styled.div`
    font-size: 17px;
    min-width: 200px;
    height: auto;
    display: grid;
    border-top: 1px solid ${color};
    border-left: 1px solid ${color};
    grid-template-columns: ${columnsTemp};
    grid-template-rows: auto;
  `;

  const Row = styled.div`
    display: contents;
  `;

  const Item = styled.div`
    padding: 3px;
    padding-left: 8px;
    border-right: 1px solid ${color};
    border-bottom: 1px solid ${color};
  `;
  return (
    <div>
      <Base>
        <Row>
          {labels.map(v => (
            <Item style={{ background: "#FCEEAD", fontSize: 20 }} key={v}>
              {v}
            </Item>
          ))}
        </Row>
        {items.map((item, i) => (
          <Row key={i}>
            {item.map(v => (
              <Item key={v}>{v}</Item>
            ))}
          </Row>
        ))}
      </Base>
    </div>
  );
};

export default Table;
