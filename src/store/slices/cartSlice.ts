import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ProductProps, StoreProduct } from '../../../type'
import { useSelector } from 'react-redux'

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
    decreaseQuantityInCart: (state, action: PayloadAction<number>) => {
      state.productData.map(i => {
        if(i._id === action.payload){
          return {
            ...i,
            quantity: i.quantity >= 1 ? i.quantity - 1 : 1
          }
        }
        return i
      })
    },
    increaseQuantityInCart: (state, action: PayloadAction<number>) => {
      state.productData.map(i => i._id === action.payload ? {...i, quantity: i.quantity + 1} : i)
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.productData.filter(product => product._id !== action.payload)
    },
    setAllProducts: (state, action: PayloadAction<StoreProduct[]>) => {
      state.allProducts = action.payload
    },
  },
})

export const cartActions = cartSlice.actions

export const cartReducer = cartSlice.reducer

export const useCartState = () => {
  return useSelector((state: RootState) => state.cart);
};