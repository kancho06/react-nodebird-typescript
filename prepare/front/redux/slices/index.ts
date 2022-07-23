import {User} from "../model/user";
import {Post} from "../model/post";
import {AnyAction, combineReducers} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import users from "./users";
import posts from "./posts";

export interface State {
    users: User;
    posts: Post;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE');
            return action.payload

        default: {
            const combineReducer = combineReducers({
                users,
                posts,
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;