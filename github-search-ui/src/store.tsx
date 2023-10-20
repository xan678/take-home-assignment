import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
    key:'root',
    storage,
}

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistReducers,
});

export default store;