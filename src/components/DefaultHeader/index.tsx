import { View } from 'react-native'
import React from 'react'

import ButtonIcon from '../ButtonIcon'
import { icons } from '../../utils/icons'
import DefaultText from '../DefaultText'
import { styles } from './styles'
import Distance from '../Distance'
import { colors } from '../../utils/colors'
import { navigationRef } from '../../navigation/RootNavigation'
import { DefaultHeaderType } from './types'

export default function DefaultHeader({
  icon,
  iconPress,
  iconRippleColor,
  iconStyle,
  iconButtonStyle,
  iconButtonContainerStyle,
  title,
  titleStyle,
  titleProps,
  containerStyle,
}: DefaultHeaderType) {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <ButtonIcon
        icon={icon ?? icons.chevronLeft}
        style={{ backgroundColor: colors.white, ...iconButtonStyle }}
        containerStyle={{ ...iconButtonContainerStyle }}
        iconStyle={{ tintColor: colors.black, ...iconStyle }}
        rippleColor={iconRippleColor ?? colors.blue}
        onPress={() => (iconPress ? iconPress() : navigationRef.goBack())}
      />
      <Distance width={10} />
      <DefaultText
        title={title}
        titleFontSize={16}
        titleFontFamily="medium"
        titleOtherStyle={{ ...titleStyle }}
        titleProps={{ ...titleProps }}
      />
    </View>
  )
}
