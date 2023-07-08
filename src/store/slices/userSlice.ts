import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { StoreProduct } from '../../../type'

interface UserState {
  favoriteData: StoreProduct[],
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
    setFavoriteData: (state, action: PayloadAction<any[]>) => {
      state.favoriteData = action.payload
    },
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload
    }
  },
})

export const userActions = userSlice.actions

export const userReducer = userSlice.reducer

export const useUserState = (state: RootState) => state.user