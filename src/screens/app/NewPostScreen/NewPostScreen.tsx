import { useRef, useState } from 'react'
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  useWindowDimensions
} from 'react-native'

import { useCameraRoll, usePermission } from '@services'

import { PermissionManager, PressableBox, Screen } from '@components'
import { AppTabScreenProps } from '@routes'

import { NewPostHeader } from './components/NewPostHeader'

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  const [selectedImage, setSelectedImage] = useState<string>()
  const permission = usePermission('photoLibrary')
  const { photoList, fetchNextPage } = useCameraRoll(
    permission.status === 'granted',
    setSelectedImage
  )
  const { width: windowWidth } = useWindowDimensions()

  const NUM_COLUMNS = 4
  const SCREEN_WIDTH = windowWidth
  const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS

  const flatListRef = useRef<FlatList<string>>(null)

  function onSelectedImage(imageUri: string) {
    setSelectedImage(imageUri)
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true })
  }

  function renderItem({ item }: ListRenderItemInfo<string>) {
    return (
      <PressableBox onPress={() => onSelectedImage(item)}>
        <Image
          key={item}
          source={{ uri: item }}
          style={{ width: ITEM_WIDTH, height: ITEM_WIDTH }}
        />
      </PressableBox>
    )
  }

  return (
    <PermissionManager
      permissionName="photoLibrary"
      description="Permita o Nubble acessar as imagens da sua galeria"
    >
      <Screen canGoBack noPaddingHorizontal title="Novo post">
        <FlatList
          ref={flatListRef}
          data={photoList}
          keyExtractor={item => item}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.1}
          numColumns={NUM_COLUMNS}
          ListHeaderComponent={
            <NewPostHeader imageUri={selectedImage} imageWidth={SCREEN_WIDTH} />
          }
        />
      </Screen>
    </PermissionManager>
  )
}
