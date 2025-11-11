import { MutationOptions, QueryKeys } from '@infra'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { postCommentService } from '../postCommentService'

export function usePostCommentRemove(
  postId: number,
  option?: MutationOptions<string>
) {
  const queryClient = useQueryClient()

  const mutation = useMutation<string, unknown, { postCommentId: number }>({
    mutationFn: ({ postCommentId }) => postCommentService.remove(postCommentId),
    onSuccess: message => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId]
      })
      if (option?.onSuccess) {
        option.onSuccess(message)
      }
    },
    onError: () => {
      if (option?.onError) {
        option.onError(
          option?.errorMessage || 'ocorreu um erro na exclusão do comentário'
        )
      }
    }
  })

  return {
    mutate: mutation.mutate
  }
}
