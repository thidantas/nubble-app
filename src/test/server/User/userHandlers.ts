import { BASE_URL, PageAPI } from '@api'
import { USER_PATH, UserAPI } from '@domain'
import { http, HttpResponse } from 'msw'

import { userMocked } from './userMocked'

type MockedResponse = PageAPI<UserAPI>

const FULL_URL = `${BASE_URL}${USER_PATH}`

export const userHandlers = [
  http.get<any, MockedResponse>(FULL_URL, async () => {
    const response: PageAPI<UserAPI> = userMocked.mockedUserResponse

    return HttpResponse.json(response, { status: 200 })
  }),
  http.get<any, { userId: string }>(
    `${FULL_URL}/:userId`,
    async ({ params }) => {
      const { userId } = params

      const userApi = userMocked.userList.find(
        user => user.id.toString() === userId
      )

      return HttpResponse.json(userApi, { status: 200 })
    }
  )
]
