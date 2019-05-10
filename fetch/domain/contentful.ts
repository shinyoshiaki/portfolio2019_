import * as contentful from "contentful";
import { Article } from "../../src/modules/contentful";
import { contentfulAccount } from "../../enviroment";

const client = contentful.createClient(contentfulAccount);

type Item = {
  sys: { id: string; createdAt: string };
  fields: { title: string; md: string; tag: string[] };
};

export async function getArticles() {
  const res = await client.getEntries();
  const items: Item[] = res.items as any;

  const articles: Article[] = items.map(v => {
    return {
      id: v.sys.id,
      createdAt: v.sys.createdAt,
      title: v.fields.title,
      md: v.fields.md,
      tag: v.fields.tag
    } as Article;
  });

  return articles;
}

export function getTags(articles: Article[]) {
  const tags = articles.map(v => v.tag).flatMap(v => v);
  return Array.from(new Set(tags));
}
