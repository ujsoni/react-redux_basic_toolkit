import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import AuthSlice from "./auth";
import counterSlice from "./counter";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer, 
        auth: AuthSlice.reducer}
})


export default store