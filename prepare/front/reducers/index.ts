import { HYDRATE } from 'next-redux-wrapper';
import {
    createAction,
    ActionType,
    createReducer,
} from 'typesafe-actions';

// 액션 수정하기
// https://react.vlpt.us/using-typescript/05-ts-redux.html
// https://redux-toolkit.js.org/api/createAction <- 이거보기
const action = ({

})

export const changeNickname = createAction(action.CHANGE_NICKNAME);
export const loginAction  = createAction(action.LOG_IN);
export const logoutAction = createAction(action.LOG_OUT);


type Action = ActionType<typeof action>

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
    [action.LOG_IN]: (state, action?) => ({ ...state, user: { isLoggedIn: true, user: state.user } }),
    [action.LOG_OUT]: (state, action) => ({ ...state, user: { isLoggedIn: false, user: null }  })
});

export default rootReducer;