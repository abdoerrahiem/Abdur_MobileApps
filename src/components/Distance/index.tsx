import React from 'react'
import { View } from 'react-native'

type Props = {
  height?: number | string
  width?: number | string
  backgroundColor?: string
  flex?: number
}

const Distance = ({
  height,
  width,
  backgroundColor,
  ...otherStyles
}: Props) => {
  return <View style={{ height, width, backgroundColor, ...otherStyles }} />
}

export default Distance
