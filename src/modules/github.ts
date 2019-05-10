export type PinnedRepo = { name: string; description: string; url: string };

export interface StateGithub {
  repos: { type: string; count: number }[];
  pinned: PinnedRepo[];
}

export const stateGithub: StateGithub = { repos: [], pinned: [] };

export const setRepos = (repos: { type: string; count: number }[]) => {
  return { type: "github_setRepos" as const, payload: repos };
};

export const setPinned = (data: PinnedRepo[]) => {
  return { type: "github_setPinned" as const, payload: data };
};

type Actions = ReturnType<typeof setRepos> | ReturnType<typeof setPinned>;

export default function reducer(
  state = stateGithub,
  action: Actions
): StateGithub {
  switch (action.type) {
    case "github_setRepos": {
      return {
        ...state,
        repos: action.payload
      };
    }
    case "github_setPinned": {
      return {
        ...state,
        pinned: action.payload
      };
    }
    default:
      return state;
  }
}
