const fs = require("fs");

import { ReduxState } from "../src/modules/createStore";
import { stateTwitter } from "../src/modules/twitter";
import { stateGithub } from "../src/modules/github";
import { stateContentful } from "../src/modules/contentful";
import { getArticles, getTags } from "./domain/contentful";
import { getProfile } from "./domain/twitter";
import { fetchUser, fetchPinned } from "./domain/github";
import fetchSpeakerdeck from "./domain/speakerdeck";
import { stateSpeakerdeck } from "../src/modules/speakerdeck";

(async () => {
  const pageProps: ReduxState = {
    twitter: stateTwitter,
    github: stateGithub,
    contentful: stateContentful,
    speakerdeck: stateSpeakerdeck
  };

  const urls = await fetchSpeakerdeck();
  if (urls) {
    pageProps.speakerdeck.urls = urls;
  }

  const articles = await getArticles();
  if (articles) {
    pageProps.contentful.articles = articles;
    pageProps.contentful.tags = getTags(articles);
  }

  const pinned = await fetchPinned();
  if (pinned) {
    pageProps.github.pinned = pinned;
  }

  const twitterProfile = await getProfile();
  if (twitterProfile) {
    pageProps.twitter.profile = twitterProfile;
  }

  const githubUser = await fetchUser("shinyoshiaki");
  if (githubUser) {
    pageProps.github.repos = githubUser;
  }

  fs.writeFileSync("./data.json", JSON.stringify(pageProps));
})();
