import { useState } from 'react'
import { Keyboard } from 'react-native'

import { usePostCommentCreate } from '@domain'

import { TextMessage } from '@components'

interface PostCommentTextMessageProps {
  postId: number
}

export function PostCommentTextMessage({
  postId
}: PostCommentTextMessageProps) {
  const [message, setMessage] = useState('')
  const { createComment } = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('')
      Keyboard.dismiss()
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
