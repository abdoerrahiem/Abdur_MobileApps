import { StyleSheet, View } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple'

import { colors } from '../../utils/colors'
import { ButtonType } from './types'
import DefaultText from '../DefaultText'
import Loading from '../Loading'

export default function Button({
  title,
  rippleColor,
  containerStyle,
  contentContainerStyle,
  titleStyle,
  loading,
  onPress,
}: ButtonType) {
  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: colors.blue,
        ...containerStyle,
      }}>
      <Ripple
        disabled={loading}
        rippleColor={rippleColor ?? colors.grey}
        onPress={onPress}>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 7,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            ...contentContainerStyle,
          }}>
          <DefaultText
            title={title}
            titleColor={colors.white}
            titleFontFamily="medium"
            titleOtherStyle={{ ...titleStyle }}
          />
          {loading && (
            <Loading color={colors.white} containerStyle={{ marginLeft: 10 }} />
          )}
        </View>
      </Ripple>
    </View>
  )
}

const styles = StyleSheet.create({})
