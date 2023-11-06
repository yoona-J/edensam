import Axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
} from "./types";
import { USER_SERVER } from '../components/Config.js';

export function registerUser(dataToSubmit) {
    console.log('user action res: ', dataToSubmit)
    const request = Axios.post(`${USER_SERVER}/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = Axios.post(`${USER_SERVER}/login`,dataToSubmit)
        .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){
    const request = Axios.get(`${USER_SERVER}/auth`)
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser(){
    const request = Axios.get(`${USER_SERVER}/logout`)
        .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function addToCart(id) {

    console.log('is', id)
    let body = {
      productId: id
    }   
    const request = Axios.post(`${USER_SERVER}/addToCart`, body)
        .then((response) => response.data);

    return {
        type: ADD_TO_CART_USER,
        payload: request,
    };
}