import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import homeReducer from "./homeReducer";
const middleware = [thunk]

const INITIAL_STATE = {}

const reducers = combineReducers({
    home: homeReducer
})

const store = createStore(reducers, INITIAL_STATE, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)


export default store;