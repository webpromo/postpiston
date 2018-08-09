
import { createStore,combineReducers } from 'redux';

import reducer2 from './reducer';
import users from './users';

const reducer = combineReducers({
    reducer2,
    users
})

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());