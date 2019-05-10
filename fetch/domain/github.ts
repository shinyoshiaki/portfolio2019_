import axios from "axios";
import GraphQLClient from "./graphql";
import gql from "graphql-tag";
import { githubAccount } from "../../enviroment";

const req = axios.create({ baseURL: "https://api.github.com/users/" });
const gqlClient = new GraphQLClient(
  "https://api.github.com/graphql",
  githubAccount
);

export const fetchUser = async (user: string) => {
  let ress: any[] = [];
  for (let i = 0; ; i++) {
    const res = await req
      .get(user + "/repos?per_page=100&page=" + i)
      .catch(console.log);
    if (!res) break;
    if ((res as any).data.length === 0) break;
    ress.push((res as any).data);
  }
  if (ress.length === 0) return;
  const res = ress.flatMap(item => item);

  const languages = res.flatMap(item => {
    if (item.language) {
      return [item.language];
    } else {
      return [];
    }
  });

  const results: { type: string; count: number }[] = [];
  const map: { [key: string]: number } = {};
  languages.forEach(lang => {
    if (Object.keys(map).includes(lang)) {
      map[lang]++;
    } else {
      map[lang] = 1;
    }
  });
  Object.keys(map).map(key => results.push({ type: key, count: map[key] }));
  return results.sort((a, b) => b.count - a.count);
};

export const fetchPinned = async () => {
  const result: {
    repositoryOwner: {
      pinnedRepositories: {
        edges: { node: { name: string; description: string; url: string } }[];
      };
    };
  } = await gqlClient
    .query(
      gql`
        {
          repositoryOwner(login: "shinyoshiaki") {
            ... on User {
              pinnedRepositories(first: 6) {
                edges {
                  node {
                    name
                    description
                    url
                  }
                }
              }
            }
          }
        }
      `
    )
    .catch();

  return result.repositoryOwner.pinnedRepositories.edges.map(v => v.node);
};
