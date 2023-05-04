import { View, TextInput, Image } from 'react-native'
import React from 'react'

import ButtonIcon from '../../../components/ButtonIcon'
import { icons } from '../../../utils/icons'
import { styles } from '../styles'
import Distance from '../../../components/Distance'
import { colors } from '../../../utils/colors'

export default function HomeHeader() {
  const [search, setSearch] = React.useState<string>('')

  const onSubmitEditing = (): void => {
    console.log('search')
  }

  return (
    <View style={styles.homeHeader}>
      <ButtonIcon
        icon={icons.chevronLeft}
        style={{ backgroundColor: colors.white }}
        iconStyle={{ tintColor: colors.grey }}
        rippleColor={colors.grey}
      />
      <Distance width={10} />
      <View style={styles.homeHeaderContainer}>
        <Image
          source={icons.search}
          resizeMode="contain"
          style={{ width: 12, height: 12, tintColor: colors.blue }}
        />
        <Distance width={7} />
        <TextInput
          placeholder="Cari Menu"
          style={styles.homeHeaderTextInput}
          returnKeyType="search"
          value={search}
          onChangeText={value => setSearch(value)}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </View>
  )
}
