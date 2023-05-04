import {
  ImageSourcePropType,
  ImageStyle,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native'

export type DefaultHeaderType = {
  icon?: ImageSourcePropType
  iconPress?: () => void
  iconRippleColor?: string
  iconStyle?: ImageStyle
  iconButtonStyle?: ViewStyle
  iconButtonContainerStyle?: ViewStyle
  title: string
  titleStyle?: TextStyle
  titleProps?: TextProps
  containerStyle?: ViewStyle
}
