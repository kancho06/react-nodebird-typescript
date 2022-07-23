import { createSlice } from "@reduxjs/toolkit"
import {RootState} from "../configureStore";
import {User} from "../model/user";
import {loginAction, logoutAction} from "../actions/userAction";

const initialState: User = {
    id: "",
    password: "",
    isLoggedIn: false,
    signupData: null,
    loginData: null
}

export const users = createSlice({
    name: "users",
    initialState,
    reducers: {},
    // 외부의 요청이 필요한 경우 extraReducers 사용
    extraReducers: (builder) => {
        builder
            .addCase(loginAction.pending, (state, action) => {})
            .addCase(loginAction.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(loginAction.rejected, (state, action) => {})


            .addCase(logoutAction.pending, (state, action) => {})
            .addCase(logoutAction.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = false;
            })
            .addCase(logoutAction.rejected, (state, action) => {})
            .addDefaultCase(() => {})
    },
});

export default users.reducer;
export const getUserInfo = (state: RootState) => state.user;