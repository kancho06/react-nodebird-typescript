import { HYDRATE } from 'next-redux-wrapper';
import {
    createAction,
    ActionType,
    createReducer,
} from 'typesafe-actions';

// 액션 수정하기
//https://velog.io/@chyoon0512/Typescript-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%98%88%EC%A0%9C-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0<- 이거보기
// const action = ({
//     CHANGE_NICKNAME: changeNickname
// })

// export const changeNickname = createAction(action.CHANGE_NICKNAME);
// export const loginAction  = createAction(action.LOG_IN);
// export const logoutAction = createAction(action.LOG_OUT);


// type Action = ActionType<typeof action>
// user action type

const CHANGE_NICKNAME = <const>'user/CHANGE_NICKNAME'
const LOGIN = <const>'user/LOGIN'
const LOGOUT = <const>'user/LOGOUT'

export const changeNickname = () => ({type: CHANGE_NICKNAME})
export const login = () => ({type: LOGIN})
export const logout = () => ({type: LOGOUT})

type UserActionType = {
    changeNickname: typeof changeNickname
    login: typeof login
    logout: typeof logout
}


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


// export interface InitialState {
//     user?: User,
//     post?: Post[]
// }


interface initialStateType {
    User: User
}

const initialState = { user: User }


// (이전상태와 액션) => 다음상태
function action(state: initialStateType = initialState, action: UserActionType)

export default rootReducer;