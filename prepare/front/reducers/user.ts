export interface User {
    isLoggedIn: boolean;
    user: any;
    signUpData: any;
    loginData: any;
}

export enum UserActionType {
    LOG_IN = "LOG_IN",
    LOG_OUT = "LOG_OUT",
}

export interface UserAction {
    type: UserActionType;
    data: any;
}

const initialState: User = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
};

export const createUserAction = (type: UserActionType, data?: any) => {
    return {
        type: type,
        data: data,
    };
};

const reducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionType.LOG_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            };
        case UserActionType.LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export default reducer;
