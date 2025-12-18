import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  PressableProps as RNPressableProps,
  Pressable
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

import { Theme } from '@theme'

export const Box = createBox<Theme>()
export type BoxProps = RSBoxProps<Theme>

type RestyleTypes = BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme>

export type TouchableOpacityBoxProps = RNTouchableOpacityProps & RestyleTypes

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity
)

export type PressableBoxProps = RNPressableProps & RestyleTypes

export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  Pressable
)
