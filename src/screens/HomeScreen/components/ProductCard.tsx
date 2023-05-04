import { Alert, Image, View, useWindowDimensions } from 'react-native'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-simple-toast'

import { styles } from '../styles'
import Distance from '../../../components/Distance'
import DefaultText from '../../../components/DefaultText'
import { colors } from '../../../utils/colors'
import Button from '../../../components/Button'
import { ProductType } from '../types'
import { noImage } from '../../../utils/constant'
import { formatRupiah } from '../../../utils/function'
import { RootDispatch, RootState } from '../../../store/types'
import { setProductsSelected } from '../../../store/product'
import ButtonIcon from '../../../components/ButtonIcon'
import { icons } from '../../../utils/icons'
import { deleteProduct } from '../../../service/product'
import { navigationRef } from '../../../navigation/RootNavigation'

const ProductCard = ({ item }: { item: ProductType }) => {
  const dispatch = useDispatch<RootDispatch>()
  const { productsSelected } = useSelector(
    (state: RootState) => state.productReducer,
  )

  const { width } = useWindowDimensions()

  const [errorImage, setErrorImage] = React.useState(false)

  const onPress = (): void => {
    if (
      productsSelected.find((product: ProductType) => product.id === item.id)
    ) {
      Toast.show('Orderan telah dipilih', Toast.SHORT)
    } else {
      dispatch(
        setProductsSelected([
          ...productsSelected,
          { ...item, qty: 1, totalPrice: Number(item.price) },
        ]),
      )
    }
  }

  return (
    <View style={[styles.productCard, { width: width / 2.25 }]}>
      <Image
        source={{
          uri: errorImage || item.picture.length === 0 ? noImage : item.picture,
        }}
        resizeMode="cover"
        style={{
          width: '100%',
          height: width / 2.5,
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          backgroundColor: colors.grey,
        }}
        onError={() => setErrorImage(true)}
      />
      <View style={{ paddingHorizontal: 10 }}>
        <Distance height={5} />
        <DefaultText
          title={item.name}
          titleFontFamily="medium"
          titleProps={{ numberOfLines: 1 }}
        />
        <Distance height={10} />
        <DefaultText
          title={`Rp. ${formatRupiah(Number(item.price))}`}
          titleFontFamily="medium"
          titleColor={colors.blue}
          subtitle={'/ porsi'}
          subtitleColor={colors.grey}
        />
        <Distance height={5} />
        <Button title="Order" onPress={onPress} />
      </View>

      <View style={styles.productCardButtons}>
        <ButtonIcon
          icon={icons.delete}
          style={{ backgroundColor: colors.red }}
          onPress={() => {
            Alert.alert(
              'Delete Product',
              'Are you sure want to delete this product?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {},
                  style: 'cancel',
                },
                {
                  text: 'Delete Now',
                  onPress: () => dispatch(deleteProduct(item.id)),
                },
              ],
            )
          }}
        />
        <Distance flex={1} />
        <ButtonIcon
          icon={icons.update}
          style={{ backgroundColor: colors.green }}
          onPress={() =>
            navigationRef.navigate(
              'UpdateProductScreen' as never,
              {
                item,
              } as never,
            )
          }
        />
      </View>
    </View>
  )
}

export default memo(ProductCard)
