import { View } from 'native-base'
import React from 'react'

export interface HeaderProps extends React.ComponentProps<typeof View> {
  onGoBack?: boolean
  rightComponent?: React.ReactNode
  leftComponent?: React.ReactNode
  leftIcon?: string
  showConfirm?: boolean
  confirmTitle?: string
}
