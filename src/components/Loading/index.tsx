import { View, ActivityIndicator } from 'react-native'
import React from 'react'

import { colors } from '../../utils/colors'
import { LoadingProps } from './type'

export default function Loading({
  size,
  color,
  containerStyle,
  loadingStyle,
}: LoadingProps) {
  return (
    <View style={containerStyle}>
      <ActivityIndicator
        animating={true}
        size={size}
        color={color ?? colors.blue}
        style={loadingStyle}
      />
    </View>
  )
}
