import { createSelector } from "reselect";

const selectRepoData = (state) => state.repoState;

export const selectMenuLinks = createSelector(
  [selectRepoData],
  (repoState) => repoState.menuLinksReducerState
);

export const selectRepoName = createSelector(
  [selectRepoData],
  (repoState) => repoState.repoReducerState.name
);

export const selectRepoWatchCount = createSelector(
  [selectRepoData],
  (repoState) => repoState.repoReducerState.watch
);

export const selectRepoStarCount = createSelector(
  [selectRepoData],
  (repoState) => repoState.repoReducerState.star
);

export const selectRepoForkCount = createSelector(
  [selectRepoData],
  (repoState) => repoState.repoReducerState.fork
);

export const selectRepoCommits = createSelector(
  [selectRepoData],
  (repoState) => repoState.repoReducerState.commits
);

export const selectRepoIssues = createSelector(
  [selectRepoData],
  (repoState) => repoState.repoReducerState.issues
);
