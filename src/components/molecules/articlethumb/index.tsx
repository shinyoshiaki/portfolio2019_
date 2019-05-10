import { FC } from "react";
import Link from "next/link";
import { Article } from "../../../modules/contentful";
import styled from "styled-components";
import dayjs from "dayjs";
import Tag from "../../atoms/tag";

type Props = { article: Article };

const ArticleThumb: FC<Props> = ({ article }) => {
  const date = (() => {
    const base = new Date(article.createdAt);
    return dayjs(base).format("YYYY/MM/DD HH:mm");
  })();

  return (
    <Card>
      <Link prefetch href={{ pathname: "/article/" + article.id }}>
        <a style={{ textDecoration: "none" }}>
          <Title>{article.title}</Title>
        </a>
      </Link>
      <div style={{ display: "flex" }}>
        <Day>{date}</Day>
        <Tags>
          {article.tag.map(v => (
            <Tag key={v}>{v}</Tag>
          ))}
        </Tags>
      </div>
      <Thumb>{article.md.split(/\n/)[0]}</Thumb>
    </Card>
  );
};

const Title = styled.p`
  color: #3f51b5;
  font-weight: bold;
  font-size: 20px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Day = styled.div`
  color: #878787;
  margin: 20px;
`;

const Tags = styled.div`
  margin: 10px;
  display: flex;
`;

const Thumb = styled.div`
  margin: 20px;
  margin-top: 0;
  color: #222222;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 20px;
`;

export default ArticleThumb;
