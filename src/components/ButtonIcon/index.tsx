import { Image, View } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple'

import { ButtonType } from './types'
import { colors } from '../../utils/colors'

export default function ButtonIcon({
  icon,
  style,
  containerStyle,
  iconStyle,
  rippleColor,
  onPress,
}: ButtonType) {
  return (
    <View
      style={{
        overflow: 'hidden',
        backgroundColor: colors.blue,
        width: 35,
        borderRadius: 90,
        ...style,
      }}>
      <Ripple rippleColor={rippleColor ?? colors.white} onPress={onPress}>
        <View
          style={{
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            ...containerStyle,
          }}>
          <Image
            source={icon}
            resizeMode="contain"
            style={{
              width: 16,
              height: 16,
              tintColor: colors.white,
              ...iconStyle,
            }}
          />
        </View>
      </Ripple>
    </View>
  )
}
