import { combineReducers } from 'redux';
import Users from './Users';
import loggedReducer from './Logged';

const allReducers = combineReducers({
    Users : Users,
    isLogged : loggedReducer
});

export default allReducers;