const withTypescript = require("@zeit/next-typescript");
const data = require("./src/data.json");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withTypescript(
  withSass(
    withCSS({
      exportPathMap: async function(defaultPathMap) {
        const articles = data.contentful.articles.reduce(
          (pages, article) =>
            Object.assign({}, pages, {
              [`/article/${article.id}`]: {
                page: "/article",
                query: { id: article.id }
              }
            }),
          {}
        );
        const tags = data.contentful.tags.reduce(
          (pages, tag) =>
            Object.assign({}, pages, {
              [`/tags/${tag}`]: {
                page: "/tags",
                query: { id: tag }
              }
            }),
          {}
        );
        return Object.assign({}, articles, tags, {
          "/": { page: "/" },
          "/blog": { page: "/blog" }
        });
      },
      webpack: function(config, options) {
        config.node = { fs: "empty", net: "empty", tls: "empty" };
        return config;
      }
    })
  )
);
