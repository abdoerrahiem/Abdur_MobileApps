import axios from 'axios'
import Toast from 'react-native-simple-toast'
import {
  setAddProductLoading,
  setProducts,
  setProductsLoading,
  setUpdateProductLoading,
} from '../store/product'
import { RootDispatch } from '../store/types'
import { API, defaultHeaderAxios } from '../utils/constant'
import { ProductType } from '../screens/HomeScreen/types'
import { navigationRef } from '../navigation/RootNavigation'

export const getProducts = () => (dispatch: RootDispatch) => {
  dispatch(setProductsLoading(true))

  axios
    .get(`${API}/g7s7P925/TestAlan`, defaultHeaderAxios())
    .then(res =>
      dispatch(
        setProducts(
          [
            ...res.data.filter(
              (item: ProductType) =>
                item.name?.length > 0 && item.price?.length > 0,
            ),
          ].reverse(),
        ),
      ),
    )
    .catch(err => console.log('err get products: ', err.response))
    .finally(() => dispatch(setProductsLoading(false)))
}

export const addProduct =
  (food_code: string, name: string, picture: string, price: string) =>
  (dispatch: RootDispatch) => {
    dispatch(setAddProductLoading(true))

    axios
      .post(
        `${API}/g7s7P925/TestAlan`,
        {
          food_code,
          name,
          picture,
          price,
          picture_ori: picture,
          created_at: new Date(),
        },
        defaultHeaderAxios(),
      )
      .then(res => {
        Toast.show('Product added successfully.')
        dispatch(getProducts())
        navigationRef.goBack()
      })
      .catch(err => {
        Toast.show('Error happens. Try again later!')
        console.log('err add product: ', err.response)
      })
      .finally(() => dispatch(setAddProductLoading(false)))
  }

export const deleteProduct = (id: number) => (dispatch: RootDispatch) => {
  axios
    .delete(`${API}/g7s7P925/TestAlan/${id}`, defaultHeaderAxios())
    .then(res => {
      Toast.show('Product deleted successfully.')
      dispatch(getProducts())
    })
    .catch(err => {
      Toast.show('Error happens. Try again later!')
      console.log('err delete product: ', err.response)
    })
}

export const updateProduct =
  (id: number, name: string, picture: string, price: string) =>
  (dispatch: RootDispatch) => {
    dispatch(setUpdateProductLoading(true))

    axios
      .put(
        `${API}/g7s7P925/TestAlan/${id}`,
        {
          name,
          picture,
          price,
          picture_ori: picture,
          created_at: new Date(),
        },
        defaultHeaderAxios(),
      )
      .then(res => {
        Toast.show('Product edited successfully.')
        dispatch(getProducts())
        navigationRef.goBack()
      })
      .catch(err => {
        Toast.show('Error happens. Try again later!')
        console.log('err edit product: ', err.response)
      })
      .finally(() => dispatch(setUpdateProductLoading(false)))
  }
