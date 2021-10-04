// https://react-redux.js.org/api/hooks


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jwt-decode';
import { selectUser } from '../slice/userSlice';
import { login } from '../slice/userSlice';


function ReduxUserState(){
    const dispatch = useDispatch();
    const userState = useSelector(selectUser);

    if (userState){
        return userState
    }

    else{
        const token1 = localStorage.getItem('token')
        if (token1){ 
            const user = jwt(token1)
            dispatch(
                login({
                    email: user.email,
                    mobile: user.mobile
                })
            )

        }
    }
}



export default ReduxUserState;