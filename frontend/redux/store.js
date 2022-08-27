import { configureStore } from '@reduxjs/toolkit';
import langReducer from './reducers/langSlice.js';
import menuHeaderReducer from './reducers/HeaderSlice';
import mainSlice from './reducers/mainSlice.js';

export const store = configureStore({
    reducer: {
        main: mainSlice,
        language: langReducer,
        menu: menuHeaderReducer
    }
})