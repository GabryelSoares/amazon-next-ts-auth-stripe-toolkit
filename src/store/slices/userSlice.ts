import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ProductProps, StoreProduct } from '../../../type'
import { useSelector } from 'react-redux'

interface UserState {
  favoriteData: ProductProps[],
  userInfo: null | string
}

const initialState: UserState = {
  favoriteData: [],
  userInfo: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    favorite: (state, action: PayloadAction<ProductProps>) => {
      const existingProduct = state.favoriteData.find(product => product._id === action.payload._id)
      if(existingProduct){
        state.favoriteData = state.favoriteData.filter(product => product._id !== action.payload._id)
      } else {
        state.favoriteData.push(action.payload)
      }
    },
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload
    },
    removeUserInfo: (state) => {
      state.userInfo = null
    }
  },
})

export const userActions = userSlice.actions

export const userReducer = userSlice.reducer

export const useUserState = () => {
  return useSelector((state: RootState) => state.user);
};