
import { createStore,combineReducers } from 'redux';

import reducer2 from './reducer';
import users from './users';

const reducer = combineReducers({
    reducer2,
    users
})

export default createStore(reducer);