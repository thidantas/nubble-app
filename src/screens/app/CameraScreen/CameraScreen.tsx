import { useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { Camera, useCameraDevice } from 'react-native-vision-camera'

import { Box, BoxProps, Icon, PermissionManager } from '@components'
import { useAppSafeArea, useAppState } from '@hooks'
import { AppScreenProps } from '@routes'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const CONTROL_HEIGHT = (SCREEN_HEIGHT - SCREEN_WIDTH) / 2
const CONTROL_DIFF = 30

export function CameraScreen({ navigation }: AppScreenProps<'CameraScreen'>) {
  const { top } = useAppSafeArea()
  const [flashOn, setFlashOn] = useState(false)

  console.log('SCREEN_HEIGHT', SCREEN_HEIGHT)

  console.log('SCREEN_WIDTH', SCREEN_WIDTH)

  console.log('CONTROL_HEIGHT', CONTROL_HEIGHT)

  const device = useCameraDevice('back')

  const isFocused = useIsFocused()
  const appState = useAppState()
  const isActive = isFocused && appState === 'active'

  console.log({ isFocused, appState, isActive })

  function toggleFlash() {
    setFlashOn(prev => !prev)
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nubble acessar a câmera do seu dispositivo"
    >
      <Box flex={1}>
        {device != null && (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
          />
        )}

        <Box flex={1} justifyContent="space-between">
          <Box style={{ paddingTop: top }} {...$controlAreaTop}>
            <Icon
              size={20}
              name="arrowLeft"
              color="grayWhite"
              onPress={navigation.goBack}
            />
            <Icon
              size={20}
              name={flashOn ? 'flashOn' : 'flashOff'}
              color="grayWhite"
              onPress={toggleFlash}
            />
            <Box width={20} />
          </Box>

          <Box {...$controlAreaBottom}>
            <Icon name="cameraClick" size={80} color="grayWhite" />
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  )
}

const $controlAreaTop: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT - CONTROL_DIFF,
  paddingHorizontal: 's24',
  flexDirection: 'row',
  justifyContent: 'space-between'
}

const $controlAreaBottom: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT + CONTROL_DIFF,
  alignItems: 'center',
  justifyContent: 'center'
}
