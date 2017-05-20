import { combineReducers } from 'redux';
import ProjectReducer from './projects-reducer';

const rootReducer = combineReducers({
  projects: ProjectReducer
});

export default rootReducer;