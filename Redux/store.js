import {legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import combineReducers from './Reducer/Combain';
const store = createStore(combineReducers)
export default store 