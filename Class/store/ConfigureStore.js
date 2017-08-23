import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import RootReduce from '../reduces/RootReduce'


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}