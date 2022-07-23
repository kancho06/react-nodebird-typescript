import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../configureStore";


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;