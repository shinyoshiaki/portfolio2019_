import { FC } from "react";
import { Card, Title, Center } from "../../../components/atoms/styled";
import Table from "../../../components/molecules/list";
import styled from "styled-components";

const History: FC = () => {
  return (
    <Card>
      <Title style={{ fontSize: 25 }}>Personal History</Title>
      <Center>
        <Base>
          <div>
            <Label>経歴</Label>
            <Table
              items={[
                { label: "XX 高等専門学校", value: "2013 ~ 2018" },
                { label: "XX 大学", value: "2018 ~" }
              ]}
            />
          </div>
          <div>
            <Label>技術</Label>
            <Table
              items={[
                { label: "Unity", value: "2016 ~ " },
                { label: "Android", value: "2017 ~ 2018" },
                { label: "WebRTC", value: "2017 ~" },
                { label: "Blockchain", value: "2017 ~" },
                { label: "Node.js", value: "2018 ~" },
                { label: "React", value: "2018 ~" },
                { label: "Angular", value: "2019 ~" }
              ]}
            />
          </div>
        </Base>
      </Center>
    </Card>
  );
};

const Base = styled.div`
  display: flex;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  @media (min-width: 1400px) {
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
  }
`;

const Label = styled.p`
  font-size: 17px;
  text-align: center;
`;

export default History;
