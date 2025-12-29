import { useNavigation } from '@react-navigation/native'

import { Box, TouchableOpacityBox, Icon, Text, BoxProps } from '@components'

import { ScreenProps } from '../Screen'

type ScreenHeaderProps = Pick<
  ScreenProps,
  'title' | 'canGoBack' | 'HeaderComponent'
> &
  BoxProps

const ICON_SIZE = 20
export function ScreenHeader({
  title,
  canGoBack,
  HeaderComponent,
  ...boxProps
}: ScreenHeaderProps) {
  const navigation = useNavigation()

  if (!title && !HeaderComponent && !canGoBack) {
    return null
  }

  const showBackLabel = !title && !HeaderComponent

  return (
    <Box
      mb="s24"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      {...boxProps}
    >
      {canGoBack && (
        <TouchableOpacityBox
          testID="screen-back-button"
          alignItems="center"
          flexDirection="row"
          mr="s10"
          onPress={navigation.goBack}
        >
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} height={ICON_SIZE} />}
    </Box>
  )
}
