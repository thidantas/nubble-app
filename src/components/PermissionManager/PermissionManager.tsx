import { Linking, Platform } from 'react-native'

import { PermissionName, usePermission } from '@services'

import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { Screen } from '../Screen/Screen'
import { Text, TextProps } from '../Text/Text'

interface PermissionManagerProps {
  permissionName: PermissionName
  description: string
  children: React.ReactElement
}

export function PermissionManager({
  permissionName,
  description,
  children
}: PermissionManagerProps) {
  const { status, isLoading } = usePermission(permissionName)

  if (status === 'granted') {
    return children
  }

  return (
    <Screen flex={1} canGoBack>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text preset="headingSmall" color="gray1" textAlign="center">
          {description}
        </Text>
        {isLoading && <ActivityIndicator color="primary" />}
        {status === 'unavailable' && (
          <Text {...$messageStyle}>
            Recurso indisponível para esse dispositivo
          </Text>
        )}
        {status === 'never_ask_again' && (
          <Box>
            {Platform.OS === 'android' && (
              <Text {...$messageStyle}>
                Após a ação é fechar o app e reabrí-lo para que as alterações de
                permissão sejam habilitadas
              </Text>
            )}
            <Button
              title="Abrir configurações"
              onPress={Linking.openSettings}
              mt="s16"
            />
          </Box>
        )}
      </Box>
    </Screen>
  )
}

const $messageStyle: TextProps = {
  preset: 'paragraphMedium',
  bold: true,
  color: 'error',
  marginVertical: 's16',
  textAlign: 'center'
}
