import { combineReducers } from 'redux'
import { userReducer } from './slices/userSlice'
import { cartReducer } from './slices/cartSlice'

export const rootReducerPersisted = combineReducers({
  user: userReducer,
  cart: cartReducer,
})