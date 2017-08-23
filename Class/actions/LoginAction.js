import * as types from  '../types/Types';

let user = {
  name: 'zhangsan',
  age: 19
};

export function isLogining() {
  return {
    type: types.LOGIN_ING
  }
}

export function loginSuccess(isSuccess, user) {
  return {
    type: types.LOGIN_ED,
    isSuccess: isSuccess,
    user: user
  }
}


export function doLogin() {
  return dispatch => {
    dispatch(isLogining());
    fetch('https://www.baidu.com').then((res)=>{
      dispatch(loginSuccess(true, user));
    }).catch((error)=>{
      dispatch(loginSuccess(false, null));
    })
  }
}