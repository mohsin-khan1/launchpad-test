import {combineReducers} from 'redux';
import repoReducer from './repos/repos.reducer';

const rootReducer = combineReducers({
    repoState: repoReducer
});

export default rootReducer;