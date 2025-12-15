import { BASE_URL, PageAPI } from '@api'
import { POST_COMMENT_PATH, PostCommentAPI } from '@domain'
import { cloneDeep } from 'lodash'
import { http, HttpResponse } from 'msw'

import { mockedData } from './mocks'

type MockedResponse = PageAPI<PostCommentAPI>

const FULL_URL = `${BASE_URL}${POST_COMMENT_PATH}`

let inMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse)

export function resetInMemoryResponse() {
  inMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse)
}

export const postCommentHandlers = [
  http.get<any, undefined, MockedResponse>(FULL_URL, async () => {
    const response: MockedResponse = inMemoryResponse

    return HttpResponse.json(response, { status: 200 })
  }),
  http.post<any, { post_id: number; message: string }>(
    FULL_URL,
    async ({ request }) => {
      const { post_id, message } = await request.json()

      const newPostCommentAPI: PostCommentAPI = {
        ...mockedData.postCommentAPI,
        id: 9999,
        post_id: post_id,
        message: message
      }

      inMemoryResponse.data = [newPostCommentAPI, ...inMemoryResponse.data]

      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total + 1
      }

      return HttpResponse.json(newPostCommentAPI, { status: 201 })
    }
  ),
  http.delete<{ postCommentId: string }>(
    `${FULL_URL}/:postCommentId`,
    async ({ params }) => {
      const postCommentId = params.postCommentId

      inMemoryResponse.data = inMemoryResponse.data.filter(
        item => item.id.toString() !== postCommentId
      )
      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total - 1
      }

      return HttpResponse.json(
        { message: 'Post comment deleted successfully' },
        { status: 200 }
      )
    }
  )
]
