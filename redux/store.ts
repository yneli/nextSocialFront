import { configureStore } from "@reduxjs/toolkit";
import { themaReducer } from "./slices/themaSlice";

export const store = configureStore({
    reducer: {
        thema: themaReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;