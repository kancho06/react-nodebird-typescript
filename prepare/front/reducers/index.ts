import { HYDRATE } from 'next-redux-wrapper';
import {
    createAction,
    ActionType,
    createReducer
} from 'typesafe-actions';

const CHANGE_NICKNAME = 'CHANGE_NICKNAME';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';


export const changeNickname = createAction(CHANGE_NICKNAME)();
export const loginAction = createAction(LOG_IN)();
export const logoutAction = createAction(LOG_OUT)();

const actions = {
    changeNickname,
    loginAction,
    logoutAction
};

type Action = ActionType<typeof actions>

export interface User {
    id?: string,
    password?: string,
    isLoggedIn: boolean,
    user?: any,
    signupData?: object,
    loginData?: object
}

export interface Post {
    id: string,
    content: string
}


export interface InitialState {
    user?: User,
    post?: Post[]
}


const initialState: InitialState = {
    user: {
        id: null,
        password: null,
        isLoggedIn: false,
        user: null,
        signupData: {},
        loginData: {},
    },
    post: []
}


// (이전상태와 액션) => 다음상태
const rootReducer = createReducer<InitialState, Action>(initialState, {
    [LOG_IN]: (state, action) => ({ ...state, user: { isLoggedIn: true, user: state.user } }),
    [LOG_OUT]: (state, action) => ({ ...state, user: { isLoggedIn: false, user: null }  })

});

export default rootReducer;