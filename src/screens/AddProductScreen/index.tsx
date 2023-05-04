import { ScrollView } from 'react-native'
import React from 'react'
import Toast from 'react-native-simple-toast'

import DefaultView from '../../components/DefaultView'
import DefaultHeader from '../../components/DefaultHeader'
import Input from '../../components/Input'
import Distance from '../../components/Distance'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootDispatch, RootState } from '../../store/types'
import { addProduct } from '../../service/product'

export default function AddProductScreen() {
  const dispatch = useDispatch<RootDispatch>()
  const { addProductLoading } = useSelector(
    (state: RootState) => state.productReducer,
  )

  const [code, setCode] = React.useState<string>('')
  const [name, setName] = React.useState<string>('')
  const [picture, setPicture] = React.useState<string>('')
  const [price, setPrice] = React.useState<string>('')

  const handlePress = (): void => {
    if (code.trim().length === 0) return Toast.show('Input your product code!')
    if (name.trim().length === 0) return Toast.show('Input your product name!')
    if (picture.trim().length === 0)
      return Toast.show('Input your product image URL!')
    if (price.trim().length === 0)
      return Toast.show('Input your product price!')

    dispatch(addProduct(code, name, picture, price))
  }

  return (
    <DefaultView>
      <DefaultHeader title="Add Product" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}>
        <Input
          placeholder="Product Code"
          value={code}
          handleChange={(value: string) => setCode(value)}
        />
        <Distance height={15} />
        <Input
          placeholder="Product Name"
          value={name}
          handleChange={(value: string) => setName(value)}
        />
        <Distance height={15} />
        <Input
          placeholder="Product Image URL"
          value={picture}
          handleChange={(value: string) => setPicture(value)}
        />
        <Distance height={15} />
        <Input
          placeholder="Product Price"
          value={price}
          handleChange={(value: string) => setPrice(value)}
          inputProps={{ keyboardType: 'number-pad' }}
        />
        <Distance height={30} />
        <Button
          title="Add Product"
          contentContainerStyle={{ paddingVertical: 10 }}
          onPress={handlePress}
          loading={addProductLoading}
        />
      </ScrollView>
    </DefaultView>
  )
}
