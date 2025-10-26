import { Post } from '@domain'

import { Box, Text } from '@components'

type PostBottomProps = Pick<Post, 'author' | 'text' | 'commentCount'>

export function PostBottom({ author, text, commentCount }: PostBottomProps) {
  const commentText = getCommentText(commentCount)
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text preset="paragraphSmall" bold color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  )
}

function getCommentText(commentCount: number) {
  if (commentCount === 0) return ''
  if (commentCount === 1) return 'Ver comentário'
  return `Ver ${commentCount} comentários`
}
