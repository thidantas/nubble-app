import { FlatList, ListRenderItemInfo } from 'react-native'

import { PostComment, usePostCommentList } from '@domain'
import { useAuthCredentials } from '@services'

import { Box, Screen } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage
} from './components'

export function PostCommentScreen({
  route
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId
  const postAuthorId = route.params.postAuthorId

  const { list, hasNextPage, fetchNextPage } = usePostCommentList(postId)
  const { userId } = useAuthCredentials()
  const { bottom } = useAppSafeArea()

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postId={postId}
        postComment={item}
        userId={userId}
        postAuthorId={postAuthorId}
      />
    )
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box justifyContent="space-between" flex={1}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom }}
          ListFooterComponent={
            <PostCommentBottom
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          }
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  )
}
