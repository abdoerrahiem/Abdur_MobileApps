import { ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native'

export type ButtonType = {
  icon: ImageSourcePropType
  style?: ViewStyle
  containerStyle?: ViewStyle
  iconStyle?: ImageStyle
  rippleColor?: string
  onPress?: () => void
}
