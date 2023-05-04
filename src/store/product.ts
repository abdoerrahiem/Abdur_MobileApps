import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    productsLoading: false,
    productsSelected: [],
    addProductLoading: false,
    updateProductLoading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setProductsLoading: (state, action) => {
      state.productsLoading = action.payload
    },
    setProductsSelected: (state, action) => {
      state.productsSelected = action.payload
    },
    setAddProductLoading: (state, action) => {
      state.addProductLoading = action.payload
    },
    setUpdateProductLoading: (state, action) => {
      state.updateProductLoading = action.payload
    },
  },
})

export default productSlice.reducer

export const {
  setProducts,
  setProductsLoading,
  setProductsSelected,
  setAddProductLoading,
  setUpdateProductLoading,
} = productSlice.actions
