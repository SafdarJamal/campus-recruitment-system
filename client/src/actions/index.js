import { SET_USER, REMOVE_USER } from '../constants/actionTypes';

const setUser = payload => {
  return {
    type: SET_USER,
    payload,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export { setUser, removeUser };
