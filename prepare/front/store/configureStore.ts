import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
    const middleWare: any[] = [];
    const enhancer = process.env.NODE_ENV === "production" ? compose(applyMiddleware(...middleWare)) : composeWithDevTools(applyMiddleware(...middleWare));
    const store = createStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === "development",
});

export default wrapper;
