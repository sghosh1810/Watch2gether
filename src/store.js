import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { playListReducer } from "./reducers/playListReducers";

const reducer = combineReducers({
    playList: playListReducer,
});

const initialState = {
    playList: { playListData: [] },
};

const middleWare = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
