import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ProductProps, StoreProduct } from '../../../type'
import { useSelector } from 'react-redux'

interface CartState {
  productData: StoreProduct[],
  allProducts: ProductProps[],
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
      const { productData } = state;
      const newItem = action.payload;
      const existingItem = productData.find(item => item._id === newItem._id);
      if (existingItem) {
        const updatedCartItems = productData.map(item => {
          if (item._id === existingItem._id) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        });
        state.productData = updatedCartItems
      } else {
        state.productData = [...productData, { ...newItem, quantity: 1 }]
      }
    },
    decreaseQuantityInCart: (state, action: PayloadAction<number>) => {
      const updatedCartItems = state.productData.map(item => {
        if (item._id === action.payload) {
          const newQuantity = item.quantity >= 1 ? item.quantity - 1 : 0;
          return {
            ...item,
            quantity: newQuantity
          };
        }
        return item;
      });
    
      const filteredCartItems = updatedCartItems.filter(i => i.quantity !== 0);
      state.productData = filteredCartItems;
    },
    increaseQuantityInCart: (state, action: PayloadAction<number>) => {
      const updatedData = state.productData.map(i => i._id === action.payload ? {...i, quantity: i.quantity + 1} : i)
      state.productData = updatedData;
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const updatedData = state.productData.filter(product => product._id !== action.payload)
      state.productData = updatedData;
    },
    resetCart: (state) => {
      state.productData = [];
    },
    setAllProducts: (state, action: PayloadAction<ProductProps[]>) => {
      state.allProducts = action.payload
    },
  },
})

export const cartActions = cartSlice.actions

export const cartReducer = cartSlice.reducer

export const useCartState = () => {
  return useSelector((state: RootState) => state.cart);
};