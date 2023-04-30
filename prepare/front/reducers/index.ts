import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user, { User } from "./user";
import post, { Post } from "./post";

export interface InitialState {
    user: User;
    post: Post;
}

const rootReducer = combineReducers({
    index: (state: InitialState, action) => {
        switch (action.type) {
            case HYDRATE:
                console.info("HYDRATE => ", action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;
