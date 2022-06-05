import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {UserReducer} from './UserReducer'
import { ListReducer } from './ListReducer';
const middleware=[thunk];
const reducer=combineReducers({
    UserReducer,
    ListReducer,
});
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;