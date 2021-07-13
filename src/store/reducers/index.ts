import { combineReducers } from 'redux';
import plusMinusReducer from './plusMinus';

const rootReducer = combineReducers({
  plusMinusReducer,
});
export default rootReducer;
