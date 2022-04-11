import { combineReducers } from 'redux';
import auth from './authReducer';
import user from './userReducer';
import management from './managementReducer';

const rootReducer = combineReducers({
  auth, user, management,
});

export default rootReducer;
