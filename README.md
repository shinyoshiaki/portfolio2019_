# PortfolioSite Next.js(as StaticSiteGenerater) + TypeScript

based on https://github.com/zeit/next.js/tree/canary/examples/with-typescript-styled-components

public edition

build example is here https://shinyoshiaki.netlify.com/

used d3.js for pie chart.

# How to build

edit ./enviroment.ts

```typescript
export const twitterAccount = {
  consumer_key: "hoge",
  consumer_secret: "hoge",
  access_token_key: "hoge",
  access_token_secret: "hoge"
};

export const contentfulAccount = {
  space: "hoge",
  accessToken:"hoge"
};

export const githubAccount = {
  Authorization: "bearer hoge",
  Accept: "application/vnd.github.v4.idl"
};

```

&

yarn deploy
