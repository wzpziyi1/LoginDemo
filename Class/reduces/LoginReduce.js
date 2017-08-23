import * as types from '../types/Types';

const initLoginSatate = {
  status: types.LOGIN_INIT,
  user: null,
  isSuccess: false
};

export function loginIn(state = initLoginSatate, action) {

  switch(action.type) {
    case types.LOGIN_INIT:
      return {
        ...state,
        status: types.LOGIN_INIT,
        user: null,
        isSuccess: false
      };

    case types.LOGIN_ING:
      return {
        ...state,
        status: types.LOGIN_ING,
        user: action.user,
        isSuccess: action.isSuccess
      };

    case types.LOGIN_ED:
      return {
        ...state,
        status: types.LOGIN_ING,
        user: action.user,
        isSuccess: action.isSuccess
      }
    default:
      return state;
  }

}