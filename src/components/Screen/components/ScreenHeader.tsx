import { useNavigation } from '@react-navigation/native'

import { Box, TouchableOpacityBox, Icon, Text } from '@components'

import { ScreenProps } from '../Screen'

type ScreenHeaderProps = Pick<ScreenProps, 'title' | 'canGoBack'>

const ICON_SIZE = 20
export function ScreenHeader({ title, canGoBack }: ScreenHeaderProps) {
  const navigation = useNavigation()

  return (
    <Box
      mb="s24"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
    >
      {canGoBack && (
        <TouchableOpacityBox
          alignItems="center"
          flexDirection="row"
          onPress={navigation.goBack}
        >
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} height={ICON_SIZE} />}
    </Box>
  )
}
