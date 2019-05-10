import { Component } from "react";
import { Article } from "../modules/contentful";
import Common from "../containers/organisms/common";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Card } from "../components/atoms/styled";
import dayjs from "dayjs";
import Tag from "../components/atoms/tag";

type Props = { article: Article };

export default class ArticlePage extends Component<Props, {}> {
  static async getInitialProps(props: { query: { id: string } }) {
    const data = await import("../data.json");
    const article = data.contentful.articles.find(v => v.id === props.query.id);
    return { article };
  }

  render() {
    const { article } = this.props;

    const date = (() => {
      const base = new Date(article.createdAt);
      return dayjs(base).format("YYYY/MM/DD HH:mm");
    })();

    return (
      <Common url="blog">
        <Base>
          <Content>
            <Card style={{ margin: 10 }}>
              <Title>{article.title}</Title>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Body>
                  <div style={{ display: "flex" }}>
                    <Day>{date}</Day>
                    <Tags>
                      {article.tag.map(v => (
                        <Tag key={v}>{v}</Tag>
                      ))}
                    </Tags>
                  </div>
                  <ReactMarkdown
                    source={article.md}
                    renderers={{
                      image: (props: any) => (
                        <img {...props} style={{ maxWidth: "80%" }} />
                      )
                    }}
                  />
                </Body>
              </div>
            </Card>
          </Content>
        </Base>
      </Common>
    );
  }
}

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

const Body = styled.div`
  width: 100%;
  margin: 5%;
  margin-top: 0px;
`;

const Day = styled.p`
  color: #878787;
  font-size: 16px;
  margin: 20px;
  margin-left: 0px;
`;

const Title = styled.p`
  color: #ea6994;
  font-weight: bold;
  font-size: 35px;
  text-align: center;
`;

const Tags = styled.div`
  margin: 10px;
  display: flex;
`;
