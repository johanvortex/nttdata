import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './redux';
const persistConfig ={
    key:'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig,rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
  });
   
    export default store;
    


