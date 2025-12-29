import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle
} from 'react-native'

import { Box, BoxProps } from '@components'
import { useAppSafeArea, useAppTheme } from '@hooks'

import { ScreenHeader, ViewContainer, ScrollViewContainer } from './components'

export interface ScreenProps extends BoxProps {
  children: React.ReactNode
  HeaderComponent?: React.ReactNode
  canGoBack?: boolean
  scrollable?: boolean
  style?: StyleProp<ViewStyle>
  title?: string
  noPaddingHorizontal?: boolean
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  title,
  HeaderComponent,
  noPaddingHorizontal = false,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea()
  const { colors } = useAppTheme()

  const Container = scrollable ? ScrollViewContainer : ViewContainer

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}
        >
          <ScreenHeader
            paddingHorizontal={noPaddingHorizontal ? 's24' : undefined}
            HeaderComponent={HeaderComponent}
            canGoBack={canGoBack}
            title={title}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
