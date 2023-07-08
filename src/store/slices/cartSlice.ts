import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ProductProps, StoreProduct } from '../../../type'

interface CartState {
  productData: StoreProduct[],
  allProducts: StoreProduct[],
}

const initialState: CartState = {
  productData: [],
  allProducts: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductProps>) => {
      const existingProduct = state.productData.find(product => product._id === action.payload._id)
      if(existingProduct){
        existingProduct.quantity += 1
      } else {
        state.productData.push({...action.payload, quantity: 1})
      }
    },
    setAllProducts: (state, action: PayloadAction<StoreProduct[]>) => {
      state.allProducts = action.payload
    }
  },
})

export const cartActions = cartSlice.actions

export const cartReducer = cartSlice.reducer

export const useCartState = (state: RootState) => state.cart