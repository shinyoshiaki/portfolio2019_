export interface StateTwitter {
  profile: { desc: string; img: string };
}

export const stateTwitter: StateTwitter = { profile: { desc: "", img: "" } };

export const setProfile = (data: { desc: string; img: string }) => {
  return { type: "twitter_profile" as const, payload: data };
};

type Actions = ReturnType<typeof setProfile>;

export default function reducer(state = stateTwitter, action: Actions) {
  switch (action.type) {
    case "twitter_profile": {
      return {
        ...state,
        profile: action.payload
      } as StateTwitter;
    }
    default:
      return state;
  }
}
