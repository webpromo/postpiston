
import { createStore,combineReducers,applyMiddleware } from 'redux';

import reducer2 from './reducer';
import users from './users';
import reduxPromiseMiddleware from 'redux-promise-middleware';

const reducer = combineReducers({
    reducer2,
    users
})

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(reduxPromiseMiddleware())
);