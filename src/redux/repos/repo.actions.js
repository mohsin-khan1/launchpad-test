import { RepoActionTypes } from "./repo.types";

export const fetchRepoData = (url) => async (dispatch) => {
  try {
    dispatch(fetchRepoDataStart());

    const repo_data = await fetch(url);
    const json_repo_data = await repo_data.json();

    let repoData = {
      name: json_repo_data.name,
      watch: json_repo_data.watchers_count,
      star: json_repo_data.stargazers_count,
      fork: json_repo_data.forks_count,
      commits: [],
      issues: [],
    };

    let issues_url = json_repo_data.issues_url.replace(/{.*}/, "");
    let commits_url = json_repo_data.commits_url.replace(/{.*}/, "");

    const repo_issues_data = await fetch(issues_url);
    const json_repo_issues_data = await repo_issues_data.json();

    repoData.issues = json_repo_issues_data;

    const repo_commits_data = await fetch(commits_url);
    const json_repo_commits_data = await repo_commits_data.json();

    repoData.commits = json_repo_commits_data;

    dispatch(fetchRepoDataSuccess(repoData));
  } catch (error) {
    dispatch(fetchRepoDataFailure(error));
  }
};

export const fetchRepoDataStart = () => ({
  type: RepoActionTypes.TYPE_FETCH_REPO_DATA_START,
  payload: true,
});

export const fetchRepoDataSuccess = (response) => ({
  type: RepoActionTypes.TYPE_FETCH_REPO_DATA_SUCCESS,
  payload: response,
});

export const fetchRepoDataFailure = (error) => ({
  type: RepoActionTypes.TYPE_FETCH_REPO_DATA_FAILURE,
  payload: error,
});
