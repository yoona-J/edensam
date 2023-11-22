import Axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
  GET_WISH_ITEMS_USER,
  ADD_TO_HISTORY,
  GET_HISTORIES,
} from "./types";
import { USER_SERVER } from "../components/Config.js";

export function registerUser(dataToSubmit) {
  console.log("user action res: ", dataToSubmit);
  const request = Axios.post(`${USER_SERVER}/register`, dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = Axios.post(`${USER_SERVER}/login`, dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = Axios.get(`${USER_SERVER}/auth`).then(
    (response) => response.data
  );

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = Axios.get(`${USER_SERVER}/logout`).then(
    (response) => response.data
  );

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function addToCart(id) {
  console.log("is", id);
  let body = {
    productId: id,
  };
  const request = Axios.post(`${USER_SERVER}/addToCart`, body).then(
    (response) => response.data
  );

  return {
    type: ADD_TO_CART_USER,
    payload: request,
  };
}

export function getWishItems(wishItems, userwish) {
  const request = Axios.get(
    `/api/admin/upload/products_by_id?id=${wishItems}&type=array`
  ).then((response) => {
    // CartItem들에 해당하는 정보들을
    // Product Collection에서 가져온후에
    // Quantity 정보를 넣어 준다.
    console.log(response);
    userwish.forEach((wishItem) => {
      response.data.upload.forEach((uploadDetail, index) => {
        if (wishItem.id === uploadDetail._id) {
          response.data.upload[index].quantity = wishItem.quantity;
        }
        console.log("wishItem:", wishItem);
      });
    });
    return response.data;
  });

  return {
    type: GET_WISH_ITEMS_USER,
    payload: request,
  };
}


export function addToHistory(id) {
  console.log("is", id);
  let body = {
    productId: id,
  };
  const request = Axios.post(`${USER_SERVER}/addToHistory`, body).then(
    (response) => response.data
  );

  return {
    type: ADD_TO_HISTORY,
    payload: request,
  };
}

export function getHistories(Histories, userhistory) {
  const request = Axios.get(
    // eslint-disable-next-line no-restricted-globals
    `/api/admin/upload/products_by_id?id=${Histories}&type=array`
  ).then((response) => {
    // CartItem들에 해당하는 정보들을
    // Product Collection에서 가져온후에
    // Quantity 정보를 넣어 준다.
    console.log(response);
    // userhistory.forEach((history) => {
    //   response.data.upload.forEach((uploadDetail, index) => {
    //     // if (history.id === uploadDetail._id) {
    //     //   response.data.upload[index].quantity = history.quantity;
    //     // }
    //     console.log("Histories:", Histories);
    //   });
    // });
    return response.data;
  });

  return {
    type: GET_HISTORIES,
    payload: request,
  };
}
