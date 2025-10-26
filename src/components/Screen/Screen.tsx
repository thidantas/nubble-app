import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Icon, Text, Box, TouchableOpacityBox, BoxProps } from '@components'
import { useAppSafeArea, useAppTheme } from '@hooks'

import {
  ViewContainer,
  ScrollViewContainer
} from './components/ScreenContainer'

interface ScreenProps extends BoxProps {
  children: React.ReactNode
  canGoBack?: boolean
  scrollable?: boolean
  style?: StyleProp<ViewStyle>
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea()
  const { colors } = useAppTheme()
  const navigation = useNavigation()

  const Container = scrollable ? ScrollViewContainer : ViewContainer

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}
        >
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row"
            >
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
