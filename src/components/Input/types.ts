import { TextInputProps, TextStyle, ViewStyle } from 'react-native'

export type InputType = {
  placeholder: string
  value: string
  handleChange: (item: string) => void
  containerStyle?: ViewStyle
  inputStyle?: TextStyle
  inputProps?: TextInputProps
}
