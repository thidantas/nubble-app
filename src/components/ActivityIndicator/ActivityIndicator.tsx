import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps
} from 'react-native'
import { useTheme } from '@shopify/restyle'

import { Theme, ThemeColors } from '../../theme/theme'

interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors
}

export function ActivityIndicator({
  color,
  ...activityIndicatorProps
}: ActivityIndicatorProps) {
  const { colors } = useTheme<Theme>()

  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  )
}
