import { Pressable } from 'react-native'

import { Text } from '@components'

interface PostCommentBottomProps {
  hasNextPage: boolean
  fetchNextPage: () => void
}

export function PostCommentBottom({
  hasNextPage,
  fetchNextPage
}: PostCommentBottomProps) {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text color="primary" textAlign="center">
          Ver Mais
        </Text>
      </Pressable>
    )
  }

  return null
}
