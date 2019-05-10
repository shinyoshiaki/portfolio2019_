import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-client";
import fetch from "node-fetch";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

class GraphQLClient {
  client: ApolloClient<NormalizedCacheObject>;

  constructor(
    gqlUrl: string,
    headers: {
      Authorization: string;
      Accept: string;
    }
  ) {
    const middleware = new ApolloLink((op, forward) => {
      op.setContext({ headers });
      return forward!(op);
    });
    const link = new HttpLink({ uri: gqlUrl, fetch: fetch as any });

    this.client = new ApolloClient({
      link: middleware.concat(link),
      cache: new InMemoryCache()
    });
  }

  query = async (query: any) => {
    const result = await this.client.query({ query });
    console.log({ result });

    return result.data;
  };
}

export default GraphQLClient;
