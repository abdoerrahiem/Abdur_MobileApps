import { FlatList, Image, TextInput, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-simple-toast'

import DefaultText from '../../../components/DefaultText'
import { styles } from '../styles'
import { icons } from '../../../utils/icons'
import { colors } from '../../../utils/colors'
import Distance from '../../../components/Distance'
import HomeProductSelected from './HomeProductSelected'
import Button from '../../../components/Button'
import ButtonIcon from '../../../components/ButtonIcon'
import { RootDispatch, RootState } from '../../../store/types'
import { ProductType } from '../types'
import { formatRupiah } from '../../../utils/function'
import { setProductsSelected } from '../../../store/product'

export default function HomeModal({
  show,
  hide,
  total,
}: {
  show: boolean
  hide: () => void
  total: number
}) {
  const dispatch = useDispatch<RootDispatch>()
  const { productsSelected } = useSelector(
    (state: RootState) => state.productReducer,
  )

  const [money, setMoney] = React.useState('')
  const [isMoneyTyped, setIsMoneyTyped] = React.useState(false)

  const handleCetakStruk = (): void => {
    if (!isMoneyTyped) return Toast.show('Masukkan uang anda')

    hide()
    dispatch(setProductsSelected([]))
    Toast.show('Berhasil', Toast.LONG)
  }

  return (
    <Modal isVisible={show} onBackButtonPress={hide} onBackdropPress={hide}>
      <View style={styles.homeModal}>
        <ButtonIcon
          icon={icons.close}
          style={styles.homeModalClose}
          iconStyle={{ tintColor: colors.black, width: 12, height: 12 }}
          rippleColor={colors.blue}
          onPress={hide}
        />

        <View style={styles.homeModalHeader}>
          <Image
            source={icons.plate}
            resizeMode="contain"
            style={{ width: 35, height: 35, tintColor: colors.blue }}
          />
          <Distance width={10} />
          <DefaultText
            title="Detail Pesanan"
            titleFontFamily="medium"
            titleColor={colors.blue}
          />
        </View>
        <Distance height={15} />
        <View style={{ maxHeight: 250 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={productsSelected}
            keyExtractor={(_, key) => key.toString()}
            renderItem={({ item }: { item: ProductType }) => (
              <HomeProductSelected isDetail={true} item={item} />
            )}
          />
        </View>

        <Distance height={15} />

        <View style={styles.homeModalFooter}>
          <View>
            <DefaultText title="Total" />
            <Distance height={20} />
            <DefaultText title="Uang Dibayar" />
            <Distance height={20} />
            {isMoneyTyped && <DefaultText title="Kembalian" />}
          </View>
          <Distance width={10} />
          <View>
            <DefaultText title=":" titleFontFamily="medium" />
            <Distance height={20} />
            <DefaultText title=":" titleFontFamily="medium" />
            <Distance height={20} />
            {isMoneyTyped && <DefaultText title=":" titleFontFamily="medium" />}
          </View>
          <Distance width={10} />
          <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#fff', padding: 5 }}>
              <DefaultText
                title={formatRupiah(total)}
                titleFontFamily="medium"
                titleOtherStyle={{ alignSelf: 'flex-end' }}
              />
            </View>
            <Distance height={10} />
            <View style={{ backgroundColor: '#d5dbd3', padding: 5 }}>
              {isMoneyTyped ? (
                <DefaultText
                  title={formatRupiah(Number(money))}
                  titleFontFamily="medium"
                  titleOtherStyle={{ alignSelf: 'flex-end' }}
                />
              ) : (
                <TextInput
                  placeholder="Masukkan dan enter"
                  keyboardType="number-pad"
                  style={{ padding: 0 }}
                  value={money}
                  onChangeText={value => setMoney(value)}
                  onSubmitEditing={() => {
                    if (Number(money) < total) {
                      Toast.show('Uang anda tidak cukup', Toast.SHORT)
                    } else {
                      setIsMoneyTyped(true)
                    }
                  }}
                />
              )}
            </View>
            <Distance height={10} />
            {isMoneyTyped && (
              <View style={{ backgroundColor: '#aedb9e', padding: 5 }}>
                <DefaultText
                  title={formatRupiah(total - Number(money))}
                  titleFontFamily="medium"
                  titleOtherStyle={{ alignSelf: 'flex-end' }}
                />
              </View>
            )}
          </View>
        </View>

        <Distance height={30} />
        <Button
          title="Cetak Struk"
          loading={false}
          onPress={handleCetakStruk}
        />
      </View>
    </Modal>
  )
}
