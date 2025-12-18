import { PageAPI } from '@api'
import { AuthCredentials, PostCommentAPI, userAdapter, UserAPI } from '@domain'

const POST_ID = 1

const jhonUserAPI: UserAPI = {
  id: 7,
  first_name: 'Jhon',
  last_name: 'Doe',
  username: 'jhondoe',
  email: 'jhondoe@email.com',
  profile_url: 'https://example-image.com/5-jhon.png',
  is_online: false,
  full_name: 'Jhon Doe'
}

export const jhonAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2030-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh-token',
  user: userAdapter.toUser(jhonUserAPI)
}

export const jhonPostCommentAPI: PostCommentAPI = {
  id: 113,
  message: 'example comment',
  user_id: 7,
  post_id: POST_ID,
  created_at: '2025-11-23T20:33:24.000+00:00',
  updated_at: '2025-11-25T18:10:29.359+00:00',
  user: jhonUserAPI,
  meta: {}
}

const postCommentAPI: PostCommentAPI = {
  id: 115,
  message:
    'Solitudo statua curo tego crepusculum adeptio absorbeo quam coaegresco inventore.',
  user_id: 6,
  post_id: POST_ID,
  created_at: '2025-11-23T20:33:24.000+00:00',
  updated_at: '2025-11-25T18:10:29.359+00:00',
  user: {
    id: 6,
    first_name: 'Samuel',
    last_name: 'Vilar',
    username: 'samuelvilar',
    email: 'samu.vilar@coffstack.com',
    profile_url: 'https://example-image.com/5-samuel.png',
    is_online: false,
    full_name: 'Samuel Vilar'
  },

  meta: {}
}

const mockedPostCommentResponse: PageAPI<PostCommentAPI> = {
  meta: {
    total: 1,
    per_page: 5,
    current_page: 1,
    last_page: 1,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=1',
    next_page_url: null,
    previous_page_url: null
  },
  data: [postCommentAPI, jhonPostCommentAPI]
}

export const mockedData = {
  POST_ID,
  mockedPostCommentResponse,
  postCommentAPI,
  jhonAuthCredentials,
  jhonPostCommentAPI
}
