import { StatusBar, View } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

import { colors } from '../../utils/colors'
import { DefaultViewType } from './types'

const DefaultView = ({
  barStyle,
  children,
  translucent,
  statusbarColor,
  backgroundColor,
}: DefaultViewType) => {
  const isFocused = useIsFocused()

  const insets = useSafeAreaInsets()

  return (
    <SafeAreaProvider>
      <View
        style={{
          height: translucent ? 0 : insets.top,
          backgroundColor: statusbarColor ?? colors.white,
        }}>
        {isFocused && (
          <StatusBar
            animated={true}
            barStyle={barStyle ?? 'dark-content'}
            backgroundColor={statusbarColor ?? colors.white}
            translucent={translucent ?? false}
          />
        )}
      </View>
      <View
        style={{ flex: 1, backgroundColor: backgroundColor ?? colors.white }}>
        {children}
      </View>
    </SafeAreaProvider>
  )
}

export default DefaultView
