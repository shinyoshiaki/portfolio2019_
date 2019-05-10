export interface StateSpeakerdeck {
  urls: string[];
}

export const stateSpeakerdeck: StateSpeakerdeck = {
  urls: []
};

export const setUrls = (data: string[]) => {
  return { type: "speakerdeck_urls" as const, payload: data };
};

type Actions = ReturnType<typeof setUrls>;

export default function reducer(
  state = stateSpeakerdeck,
  action: Actions
): StateSpeakerdeck {
  switch (action.type) {
    case "speakerdeck_urls": {
      return {
        ...state,
        urls: action.payload
      };
    }
    default:
      return state;
  }
}
