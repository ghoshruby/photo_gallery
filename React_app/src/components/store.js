// https://redux-toolkit.js.org/api/configureStore


import {configureStore} from "@reduxjs/toolkit";
import userReducer from './slice/userSlice';

export default configureStore({
    reducer:{
        user : userReducer,
    }
})   