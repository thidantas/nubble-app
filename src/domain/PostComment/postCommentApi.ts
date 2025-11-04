import { api, PageAPI, PageParams } from '@api'

import { PostCommentAPI } from './postCommentTypes'

const PATH_URL = 'user/post_comment'

async function getList(
  post_id: number,
  pageParams?: PageParams
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>(PATH_URL, {
    params: {
      post_id,
      ...pageParams
    }
  })

  return response.data
}

async function create(
  post_id: number,
  message: string
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>(PATH_URL, {
    post_id,
    message
  })

  return response.data
}
async function remove(id: number): Promise<{ message: string }> {
  const response = await api.delete<{ message: string }>(`${PATH_URL}/${id}`)

  return response.data
}

export const postCommentApi = {
  getList,
  create,
  remove
}
