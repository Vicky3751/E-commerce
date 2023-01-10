import { combineReducers } from 'redux';
import spinnerReducer from './spinnerReducer';


const rootReducer = combineReducers({
  spinner: spinnerReducer,
});

export default rootReducer;
