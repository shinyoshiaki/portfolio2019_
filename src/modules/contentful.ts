export type Article = {
  id: string;
  createdAt: string;
  title: string;
  md: string;
  tag: string[];
};

export interface StateContentful {
  articles: Article[];
  tags: string[];
}

export const stateContentful: StateContentful = { articles: [], tags: [] };

export const setArticles = (data: Article[]) => {
  return { type: "contentful_setarticles" as const, payload: data };
};

export const setTags = (tags: string[]) => {
  return { type: "contentful_settags" as const, payload: tags };
};

type Actions = ReturnType<typeof setArticles> | ReturnType<typeof setTags>;

export default function reducer(
  state = stateContentful,
  action: Actions
): StateContentful {
  switch (action.type) {
    case "contentful_setarticles": {
      return {
        ...state,
        articles: action.payload
      };
    }
    case "contentful_settags": {
      return {
        ...state,
        tags: action.payload
      };
    }
    default:
      return state;
  }
}
