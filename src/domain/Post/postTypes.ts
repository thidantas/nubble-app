export interface Post {
  id: number
  text: string
  author: {
    profileUrl: string
    name: string
    username: string
    id: number
  }
  imageURL: string
  reactionCount: number
  commentCount: number
  favoriteCount: number
}

export interface PostAPI {
  id: number // 5
  text: string // 'Explorando os restaurantes de Melbourne'
  user_id: number // 5
  image_url: string // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post5.jpg'
  is_fixed: false
  is_activated: true
  created_at: string // '2025-10-27T12:42:43.184-03:00'
  updated_at: string // '2025-10-27T12:42:43.185-03:00'
  user: {
    id: number // 5
    first_name: string // 'Vanessa'
    last_name: string // 'Isidório'
    username: string // 'vanessa_isidorio'
    email: string // 'vanessa123@coffstack.com'
    profile_url: string // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/9-vanessa.png'
    is_online: false
    full_name: string // 'Vanessa Isidório'
    meta?: {
      following_count: string // '0'
      followers_count: string // '0'
    }
  }
  reactions?: []
  status: string // 'published'
  meta: {
    like_count: string // '7'
    favorite_count: string // '1'
    comments_count: string // '9'
  }
}
