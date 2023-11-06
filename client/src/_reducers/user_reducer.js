import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  USER_MAILBOX,
  ADD_TO_CART_USER,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case ADD_TO_CART_USER:
      return {
        ...state, 
          // userData: {
          // ...state.userData,
          // wishList: action.payload,
        // },
      };
    case USER_MAILBOX:
      return {
        ...state,
        userData: { ...state.userData, mailbox: action.payload },
      };
    default:
      return state;
  }
}
