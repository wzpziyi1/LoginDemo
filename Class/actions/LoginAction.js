import * as types from  '../types/Types';

let user = {
  account: 'zhangsan',
  password: 123456
};

export function isLogining() {
  return {
    type: types.LOGIN_ING,
    isSuccess: false
  }
}

export function loginSuccess(isSuccess, user) {
  return {
    type: types.LOGIN_ED,
    isSuccess: isSuccess,
    user: user
  }
}


export function doLogin(user) {
  return dispatch => {
    dispatch(isLogining());
    fetch('https://www.baidu.com').then((res)=>{
      console.log('+++++++++');
      dispatch(loginSuccess(true, user));
    }).catch((error)=>{
      dispatch(loginSuccess(false, null));
    })
  }
}