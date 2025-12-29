import { useRef, useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import {
  Camera,
  Templates,
  useCameraDevice,
  useCameraFormat
} from 'react-native-vision-camera'

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
  const [isReady, setIsReady] = useState(false)

  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera'
    ]
  })

  const camera = useRef<Camera>(null)

  const format = useCameraFormat(device, Templates.Instagram)

  const isFocused = useIsFocused()
  const appState = useAppState()
  const isActive = isFocused && appState === 'active'

  async function takePhoto() {
    if (camera.current == null) return

    const photoFile = await camera.current?.takePhoto({
      flash: flashOn ? 'on' : 'off',
      enableAutoRedEyeReduction: true
    })

    navigation.navigate('PublishPostScreen', {
      imageUri: `file://${photoFile?.path}`
    })
  }

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
            ref={camera}
            format={format}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            photoQualityBalance="balanced"
            onInitialized={() => setIsReady(true)}
            photo={true}
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
            {isReady && (
              <Icon
                name="cameraClick"
                size={80}
                color="grayWhite"
                onPress={takePhoto}
              />
            )}
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
