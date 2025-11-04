import { useState } from 'react'
import { Keyboard } from 'react-native'

import { usePostCommentCreate } from '@domain'

import { TextMessage } from '@components'

interface PostCommentTextMessageProps {
  postId: number
  onAddComment: () => void
}

export function PostCommentTextMessage({
  postId,
  onAddComment
}: PostCommentTextMessageProps) {
  const [message, setMessage] = useState('')
  const { createComment } = usePostCommentCreate(postId, {
    onSuccess: () => {
      Keyboard.dismiss()
      setMessage('')
      onAddComment()
    }
  })

  return (
    <TextMessage
      value={message}
      placeholder="Adicione um comentário"
      onChangeText={setMessage}
      onPressSend={createComment}
    />
  )
}
