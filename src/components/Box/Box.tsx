import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps
} from 'react-native'
import {
  createBox,
  createRestyleComponent,
  border,
  BorderProps,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  backgroundColor,
  BackgroundColorProps,
  BoxProps as RSBoxProps
} from '@shopify/restyle'

import { Theme } from '../../theme/theme'

export const Box = createBox<Theme>()
export type BoxProps = RSBoxProps<Theme>

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableOpacityProps

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity
)
