import { TextStyle, ViewStyle } from 'react-native/types'

export type ButtonType = {
  title: string
  rippleColor?: string
  containerStyle?: ViewStyle
  contentContainerStyle?: ViewStyle
  titleStyle?: TextStyle
  onPress?: () => void
  loading?: boolean
}
