import { RepoActionTypes } from "./repo.types";

const INITIAL_STATE = {
  menuLinksReducerState: [
    {
      url: "https://api.github.com/repos/facebook/react",
      icon: "fab fa-react",
      title: "React JS",
    },
    {
      url: "https://api.github.com/repos/angular/angular.js",
      icon: "fab fa-angular",
      title: "Angular JS",
    },
    {
      url: "https://api.github.com/repos/emberjs/ember.js",
      icon: "fab fa-ember",
      title: "Ember JS",
    },
    {
      url: "https://api.github.com/repos/vuejs/vue",
      icon: "fab fa-vuejs",
      title: "Vue JS",
    },
  ],
  repoReducerState: {
    name: null,
    watch: null,
    star: null,
    fork: null,
    commits: [],
    issues: [],
  },
  isLoading: false,
  errorMessage: null,
};

const repoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepoActionTypes.TYPE_FETCH_REPO_DATA_START:
      return {
        ...state,
        isLoading: true,
      };

    case RepoActionTypes.TYPE_FETCH_REPO_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        repoReducerState: action.payload,
      };

    case RepoActionTypes.TYPE_FETCH_REPO_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        repoReducerState: [],
      };

    default:
      return state;
  }
};

export default repoReducer;
