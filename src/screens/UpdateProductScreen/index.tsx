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
import { addProduct, updateProduct } from '../../service/product'
import { UpdateProductScreenProps } from '../../navigation/types'

export default function UpdateProductScreen({
  route,
}: UpdateProductScreenProps) {
  const { item } = route.params

  const dispatch = useDispatch<RootDispatch>()
  const { updateProductLoading } = useSelector(
    (state: RootState) => state.productReducer,
  )

  const [name, setName] = React.useState<string>(item.name)
  const [picture, setPicture] = React.useState<string>(item.picture)
  const [price, setPrice] = React.useState<string>(item.price)

  const handlePress = (): void => {
    if (name.trim().length === 0) return Toast.show('Input your product name!')
    if (picture.trim().length === 0)
      return Toast.show('Input your product image URL!')
    if (price.trim().length === 0)
      return Toast.show('Input your product price!')

    dispatch(updateProduct(item.id, name, picture, price))
  }

  return (
    <DefaultView>
      <DefaultHeader title="Edit Product" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}>
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
          title="Edit Product"
          contentContainerStyle={{ paddingVertical: 10 }}
          onPress={handlePress}
          loading={updateProductLoading}
        />
      </ScrollView>
    </DefaultView>
  )
}
