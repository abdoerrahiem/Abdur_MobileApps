import { FlatList, useWindowDimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DefaultView from '../../components/DefaultView'
import HomeHeader from './components/HomeHeader'
import ProductCard from './components/ProductCard'
import HomeFooter from './components/HomeFooter'
import { RootDispatch, RootState } from '../../store/types'
import { getProducts } from '../../service/product'
import Loading from '../../components/Loading'
import { ProductType } from './types'
import ButtonIcon from '../../components/ButtonIcon'
import { icons } from '../../utils/icons'
import { styles } from './styles'
import { HomeScreenProps } from '../../navigation/types'

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const dispatch = useDispatch<RootDispatch>()
  const { products, productsLoading } = useSelector(
    (state: RootState) => state.productReducer,
  )

  const [showMore, setShowMore] = React.useState<boolean>(false)

  React.useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { height } = useWindowDimensions()

  return (
    <DefaultView>
      <HomeHeader />
      {!showMore && (
        <ButtonIcon
          icon={icons.plus}
          style={styles.buttonAdd}
          containerStyle={{ height: 50 }}
          onPress={() => navigation.navigate('AddProductScreen')}
        />
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(_, key) => key.toString()}
        renderItem={({ item }: { item: ProductType }) => (
          <ProductCard item={item} />
        )}
        numColumns={2}
        contentContainerStyle={{ padding: 10 }}
        ListFooterComponent={
          <>
            {productsLoading && (
              <Loading
                size="large"
                containerStyle={{
                  height: height / 1.5,
                  justifyContent: 'center',
                }}
              />
            )}
          </>
        }
      />
      <HomeFooter showMore={showMore} setShowMore={setShowMore} />
    </DefaultView>
  )
}
