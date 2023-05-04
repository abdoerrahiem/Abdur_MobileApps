import { ReactNode } from 'react'

export type DefaultViewType = {
  barStyle?: 'light-content' | 'dark-content'
  children?: ReactNode
  translucent?: boolean
  statusbarColor?: string
  backgroundColor?: string
}
