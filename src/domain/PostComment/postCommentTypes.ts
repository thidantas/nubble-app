export interface PostComment {
  id: number
  message: string
  createdAt: string
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
  user: {
    id: number // 8
    first_name: string // 'Gabriel'
    last_name: string // 'Lemos'
    username: string // 'glemos'
    email: string // 'glemos@coffstack.com'
    profile_url: string // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/3-gabriel.png'
    is_online: boolean // false
    full_name: string // 'Gabriel Lemos'
  }
  meta: any // {}
}
