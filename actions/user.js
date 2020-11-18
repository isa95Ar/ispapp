import { LOGOUT, SET_USER } from "../constants/actionTypes";

export const updateUser = (user) => ({
  type: SET_USER,
  user,
});

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
