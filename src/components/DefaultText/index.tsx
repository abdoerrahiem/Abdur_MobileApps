import { StyleSheet, Text, TextStyle, TextProps } from 'react-native'
import React from 'react'

import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

type DefaultTextProps = {
  title?: string
  titleColor?: string
  titleFontFamily?: 'regular' | 'medium' | 'bold'
  titleFontSize?: number
  titleOtherStyle?: TextStyle
  titlePress?: () => void
  titleProps?: TextProps
  subtitle?: string
  subtitleColor?: string
  subtitleFontFamily?: 'regular' | 'medium' | 'bold'
  subtitleFontSize?: number
  subtitleOtherStyle?: TextStyle
  subtitlePress?: () => void
}

export default function DefaultText({
  title,
  titleColor,
  titleFontFamily,
  titleFontSize,
  titleOtherStyle,
  titlePress,
  titleProps,
  subtitle,
  subtitleColor,
  subtitleFontFamily,
  subtitleFontSize,
  subtitleOtherStyle,
  subtitlePress,
}: DefaultTextProps) {
  return (
    <Text
      onPress={titlePress}
      style={{
        color: titleColor ?? colors.black,
        fontFamily:
          titleFontFamily === 'bold'
            ? fonts.bold
            : titleFontFamily === 'medium'
            ? fonts.medium
            : titleFontFamily === 'regular'
            ? fonts.regular
            : fonts.regular,
        fontSize: titleFontSize ?? 14,
        fontWeight:
          titleFontFamily === 'bold'
            ? 'bold'
            : titleFontFamily === 'medium'
            ? '500'
            : titleFontFamily === 'regular'
            ? 'normal'
            : 'normal',
        ...titleOtherStyle,
      }}
      {...titleProps}>
      {title}
      {subtitle && (
        <Text
          onPress={subtitlePress}
          style={{
            color: subtitleColor ?? colors.black,
            fontFamily:
              subtitleFontFamily === 'bold'
                ? fonts.bold
                : subtitleFontFamily === 'medium'
                ? fonts.medium
                : subtitleFontFamily === 'regular'
                ? fonts.regular
                : fonts.regular,
            fontSize: subtitleFontSize ?? 14,
            fontWeight:
              subtitleFontFamily === 'bold'
                ? 'bold'
                : subtitleFontFamily === 'medium'
                ? '500'
                : subtitleFontFamily === 'regular'
                ? 'normal'
                : 'normal',
            ...subtitleOtherStyle,
          }}>
          {' '}
          {subtitle}
        </Text>
      )}
    </Text>
  )
}

const styles = StyleSheet.create({})
