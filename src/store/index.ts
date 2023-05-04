import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product'

const store = configureStore({
  reducer: {
    productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
