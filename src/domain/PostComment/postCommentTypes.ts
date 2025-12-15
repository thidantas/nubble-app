import { UserAPI } from '../User'

export interface PostComment {
  id: number
  message: string
  createdAt: string
  createdAtRelative: string // '1 h, 2 sem'
  author: {
    id: number
    profileURL: string
    name: string
    userName: string
  }
}

export interface PostCommentAPI {
  id: number // 31
  message: string // 'Aeternus ullus combibo ars volo aeneus.'
  user_id: number // 8
  post_id: number // 1
  created_at: string // '2025-10-31T04:13:27.000-03:00'
  updated_at: string // '2025-10-31T15:37:47.439-03:00'
  user: UserAPI
  meta: any // {}
}
