import { getDefaultMiddleware, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import userSlice from "./slices/users";
import { createWrapper } from 'next-redux-wrapper';
import slices from "./slices";


//https://freestrokes.tistory.com/161


// 여기 위에 페이지보고 내일 설정


const devMode = process.env.NODE_ENV === 'development';

export const store = configureStore({
    reducer: slices,
    middleware: [...getDefaultMiddleware()],
    devTools: devMode,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
});

const setupStore = (context: any): EnhancedStore => store;

const makeStore = (context) => setupStore(context);

export const wrapper = createWrapper(makeStore, {
    debug: devMode
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;