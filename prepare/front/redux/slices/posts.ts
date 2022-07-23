import {Post} from "../model/post";
import {createSlice} from "@reduxjs/toolkit";
import {loginAction} from "../actions/userAction";


const initialState: Post = {};

export const posts = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAction.pending, (state, action) => {})
            .addCase(loginAction.fulfilled, (state, action) => {})
            .addCase(loginAction.rejected, (state, action) => {})

            .addDefaultCase(() => {})
    }
});

export default posts.reducer;