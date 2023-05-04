import { Image, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { colors } from '../../../utils/colors'
import { styles } from '../styles'
import DefaultText from '../../../components/DefaultText'
import Distance from '../../../components/Distance'
import Button from '../../../components/Button'
import { ProductType } from '../types'
import { noImage } from '../../../utils/constant'
import { formatRupiah } from '../../../utils/function'
import { RootDispatch, RootState } from '../../../store/types'
import { setProductsSelected } from '../../../store/product'

export default function HomeProductSelected({
  isDetail = false,
  item,
}: {
  isDetail?: boolean
  item: ProductType
}) {
  const dispatch = useDispatch<RootDispatch>()
  const { productsSelected } = useSelector(
    (state: RootState) => state.productReducer,
  )
  const [errorImage, setErrorImage] = React.useState(false)

  const handleAddQty = (): void => {
    const productsSelectedUpdated: ProductType[] = [...productsSelected]
    const foundIndex = productsSelected.findIndex(
      (product: ProductType) => product.id === item.id,
    )
    productsSelectedUpdated[foundIndex] = { ...item }
    productsSelectedUpdated[foundIndex].qty =
      productsSelectedUpdated[foundIndex].qty + 1
    productsSelectedUpdated[foundIndex].totalPrice =
      productsSelectedUpdated[foundIndex].totalPrice +
      Number(productsSelectedUpdated[foundIndex].price)

    dispatch(setProductsSelected(productsSelectedUpdated))
  }

  const handleSubtractQty = (): void => {
    const productsSelectedUpdated: ProductType[] = [...productsSelected]
    const foundIndex = productsSelected.findIndex(
      (product: ProductType) => product.id === item.id,
    )
    productsSelectedUpdated[foundIndex] = { ...item }

    if (productsSelectedUpdated[foundIndex].qty === 1) {
      dispatch(
        setProductsSelected(
          productsSelectedUpdated.filter(
            (product: ProductType) => product.id !== item.id,
          ),
        ),
      )
    } else {
      productsSelectedUpdated[foundIndex].qty =
        productsSelectedUpdated[foundIndex].qty - 1
      productsSelectedUpdated[foundIndex].totalPrice =
        productsSelectedUpdated[foundIndex].totalPrice -
        Number(productsSelectedUpdated[foundIndex].price)

      dispatch(setProductsSelected(productsSelectedUpdated))
    }
    setErrorImage(false)
  }

  return (
    <View style={styles.homeProductSelected}>
      <Image
        source={{
          uri: errorImage || item.picture.length === 0 ? noImage : item.picture,
        }}
        resizeMode="cover"
        style={{ width: 45, height: 45, backgroundColor: colors.grey }}
        onError={() => setErrorImage(true)}
      />
      <Distance width={10} />
      <View style={{ flex: 1 }}>
        <DefaultText
          title={item.name}
          titleFontSize={12}
          titleFontFamily="medium"
        />
        <Distance height={2.5} />
        <DefaultText
          title={`Rp. ${formatRupiah(Number(item.price))}`}
          titleFontSize={12}
          titleFontFamily="medium"
          titleColor={colors.blue}
          subtitle={'/ porsi'}
          subtitleColor={colors.grey}
        />
      </View>
      {isDetail ? (
        <DefaultText title={`x${item.qty}`} />
      ) : (
        <View style={styles.homeProductSelectedButton}>
          <Button
            title="-"
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: colors.blue,
            }}
            contentContainerStyle={{ paddingVertical: 5 }}
            titleStyle={{ color: colors.black }}
            rippleColor={colors.blue}
            onPress={handleSubtractQty}
          />
          <DefaultText
            title={`${item.qty}`}
            titleFontSize={12}
            titleFontFamily="medium"
            titleOtherStyle={{ marginHorizontal: 10 }}
          />
          <Button
            title="+"
            contentContainerStyle={{ paddingVertical: 5 }}
            onPress={handleAddQty}
          />
        </View>
      )}
    </View>
  )
}
