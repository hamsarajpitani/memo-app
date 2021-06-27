/* eslint-disable no-unused-vars */
import { AUTH_FAIL, AUTH_SUCCESS, AUTH_LOGOUT } from "./auth.types.js";

let userFromStorage = null;
if (typeof window !== "undefined") {
  userFromStorage =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
}

const authReducer = (state = { authData: userFromStorage }, {type,data}) => {
  switch (type) {
    case AUTH_SUCCESS:
      localStorage.setItem("profile", JSON.stringify(data));

      return { ...state, authData: data };

    case AUTH_LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
