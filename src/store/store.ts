import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/userSlice'
import { cartReducer } from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch