import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import { InputType } from './types'

export default function Input({
  placeholder,
  value,
  handleChange,
  containerStyle,
  inputStyle,
  inputProps,
}: InputType) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.grey,
        padding: 10,
        borderRadius: 5,
        ...containerStyle,
      }}>
      <TextInput
        placeholder={placeholder}
        style={{
          fontFamily: fonts.regular,
          fontSize: 14,
          padding: 0,
          margin: 0,
          ...inputStyle,
        }}
        value={value}
        onChangeText={handleChange}
        autoCapitalize="none"
        {...inputProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
