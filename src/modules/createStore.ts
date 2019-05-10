import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";
import logger from "redux-logger";
import twitter, { StateTwitter } from "./twitter";
import github, { StateGithub } from "./github";
import contentful, { StateContentful } from "./contentful";
import speakerdeck, { StateSpeakerdeck } from "./speakerdeck";

const rootReducer = combineReducers({
  twitter,
  github,
  contentful,
  speakerdeck
});

export default function createStore(initialState?: ReduxState) {
  const store = initialState
    ? reduxCreateStore(rootReducer, initialState, applyMiddleware(logger))
    : reduxCreateStore(rootReducer, applyMiddleware(logger));
  return store;
}

export interface ReduxState {
  twitter: StateTwitter;
  github: StateGithub;
  contentful: StateContentful;
  speakerdeck: StateSpeakerdeck;
}
