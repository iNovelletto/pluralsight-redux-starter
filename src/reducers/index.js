import {combineReducers} from 'redux';
import authors from './authorReducer';
import courses from './courseReducer';

const rootReducer = combineReducers({
  authors: authors,
  courses: courses
});

export default rootReducer;
