import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ProductType } from '../screens/HomeScreen/types'

export type RootStackParamList = {
  HomeScreen: undefined
  AddProductScreen: undefined
  UpdateProductScreen: {
    item: ProductType
  }
}

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>

export type AddProductScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddProductScreen'
>

export type UpdateProductScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'UpdateProductScreen'
>
