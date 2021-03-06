import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.nodeENV !== "production",
});

const makeStore = () => store;

export default store;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
