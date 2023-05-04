import { FlatList, Image, View } from 'react-native'
import React from 'react'
import Toast from 'react-native-simple-toast'

import { styles } from '../styles'
import { icons } from '../../../utils/icons'
import DefaultText from '../../../components/DefaultText'
import Button from '../../../components/Button'
import Distance from '../../../components/Distance'
import { colors } from '../../../utils/colors'
import ButtonIcon from '../../../components/ButtonIcon'
import HomeProductSelected from './HomeProductSelected'
import HomeModal from './HomeModal'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/types'
import { ProductType } from '../types'
import { formatRupiah } from '../../../utils/function'

export default function HomeFooter({
  showMore,
  setShowMore,
}: {
  showMore: boolean
  setShowMore: (value: boolean) => void
}) {
  const { productsSelected } = useSelector(
    (state: RootState) => state.productReducer,
  )
  const [showModal, setShowModal] = React.useState<boolean>(false)
  const [total, setTotal] = React.useState<number>(0)

  React.useEffect(() => {
    if (productsSelected.length > 0) {
      let price: number = 0
      productsSelected.map(
        (item: ProductType) => (price = price + item.totalPrice),
      )
      setTotal(price)
    } else {
      setTotal(0)
      setShowMore(false)
    }
  }, [productsSelected])

  const handleCharge = (): void => {
    if (productsSelected.length > 0) {
      setShowModal(true)
    } else {
      Toast.show('Anda belum memilih orderan', Toast.SHORT)
    }
  }

  return (
    <View style={styles.homeFooter}>
      <ButtonIcon
        icon={showMore ? icons.chevronBottom : icons.chevronTop}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: -12.5,
          width: 25,
        }}
        containerStyle={{ height: 25 }}
        iconStyle={{ width: 12, height: 12 }}
        onPress={() => productsSelected.length > 0 && setShowMore(!showMore)}
      />

      <View style={styles.homeFooterHeader}>
        <View>
          <Image
            source={icons.bag}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: colors.blue }}
          />
          {productsSelected.length > 0 && (
            <View style={styles.chip}>
              <DefaultText
                title={`${productsSelected.length}`}
                titleFontSize={8}
                titleColor={colors.white}
              />
            </View>
          )}
        </View>
        <Distance width={20} />
        <DefaultText
          title={`Rp. ${formatRupiah(total)}`}
          titleFontFamily="medium"
          titleOtherStyle={{ flex: 1 }}
        />
        <Button title="Charge" onPress={handleCharge} />
      </View>

      {showMore && productsSelected.length > 0 && (
        <>
          <Distance height={10} />
          <View style={{ maxHeight: 250 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={productsSelected}
              keyExtractor={(_, key) => key.toString()}
              renderItem={({ item }: { item: ProductType }) => (
                <HomeProductSelected item={item} />
              )}
            />
          </View>
        </>
      )}

      <HomeModal
        show={showModal}
        hide={() => setShowModal(false)}
        total={total}
      />
    </View>
  )
}
