import { ImageBackground, StyleSheet } from 'react-native'

import { images } from '@assets'
import { useNavigation } from '@react-navigation/native'

import { Box, BoxProps, Button, Icon, Text } from '@components'

interface NewPostProps {
  imageUri?: string
  imageWidth: number
}

export function NewPostHeader({ imageUri, imageWidth }: NewPostProps) {
  const navigation = useNavigation()

  function navigateToPublishPost() {
    if (imageUri) {
      navigation.navigate('PublishPostScreen', { imageUri })
    }
  }

  function navigateToCamera() {
    navigation.navigate('CameraScreen')
  }

  return (
    <Box>
      <ImageBackground
        source={imageUri ? { uri: imageUri } : images.imagePlaceholder}
        style={[
          {
            width: imageWidth,
            height: imageWidth
          },
          styles.imageBackground
        ]}
      >
        {Boolean(imageUri) && (
          <Button
            preset="ghost"
            title="Escolher essa"
            mb="s24"
            onPress={navigateToPublishPost}
          />
        )}
      </ImageBackground>

      <Box {...$optionStyle}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" onPress={navigateToCamera} />
      </Box>
    </Box>
  )
}

const $optionStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingVertical: 's16'
}

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})
