import { useState } from 'react'
import { Image, ImageStyle, useWindowDimensions } from 'react-native'

import { Button, Screen, Text, TextInput } from '@components'
import { AppScreenProps } from '@routes'

export function PublishPostScreen({
  route
}: AppScreenProps<'PublishPostScreen'>) {
  const { width: screenWidth } = useWindowDimensions()

  const [description, setDescription] = useState('')

  const IMAGE_WIDTH = screenWidth / 2

  const $imageStyle: ImageStyle = {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    alignSelf: 'center',
    marginTop: 20
  }

  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{
          uri: route.params.imageUri,
          width: IMAGE_WIDTH,
          height: IMAGE_WIDTH
        }}
        style={$imageStyle}
      />

      <Text preset="headingSmall" mt="s32" mb="s10">
        Escreva uma legenda
      </Text>

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite aqui..."
        containerProps={{ borderWidth: 0, padding: undefined }}
      />

      <Button mt="s56" title="Publicar post" />
    </Screen>
  )
}
