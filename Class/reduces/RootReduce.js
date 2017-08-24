import {combineReducers} from 'redux'
import LoginReduce, {loginIn} from './LoginReduce'

const rootReduce = combineReducers({
  loginIn: loginIn
});

export default rootReduce;