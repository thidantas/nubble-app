import { Post } from '@domain'

export const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 5,
  favoriteCount: 2,
  reactionCount: 3,
  text: 'This is the text (post description)',
  author: {
    id: 2,
    name: 'Jhon Doe',
    profileURL: 'fake-profile-url',
    userName: 'jhondoe'
  }
}
