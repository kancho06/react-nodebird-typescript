import { createAsyncThunk } from '@reduxjs/toolkit';
import {User} from "../model/user";


interface rejectMessage {
    errorMessage: string;
}

export const logoutAction: any = createAsyncThunk<User, any, { rejectValue: rejectMessage }>(
    'user/logout', async (data, thunkApi) => {
        console.log(data, "logout action")
        return data
    });

export const loginAction: any = createAsyncThunk<User, any, { rejectValue: rejectMessage }>(
    'user/login',
    async (data) => {
        console.log(data, 'login action');
        return data
    }
);