import { Post } from '@domain'

import { Box } from '../Box/Box'
import { ProfileUser } from '../ProfileUser/ProfileUser'

import { PostActions } from './components/PostActions'
import { PostBottom } from './components/PostBottom'
import { PostImage } from './components/PostImage'

interface PostItemProps {
  post: Post
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <ProfileUser
        user={{
          id: post.author.id,
          username: post.author.username,
          profileUrl: post.author.profileUrl
        }}
      />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  )
}
