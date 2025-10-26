import { Post } from '@domain'

import { Box } from '../Box/Box'

import { PostActions } from './components/PostActions'
import { PostBottom } from './components/PostBottom'
import { PostHeader } from './components/PostHeader'
import { PostImage } from './components/PostImage'

interface PostItemProps {
  post: Post
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
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
      />
    </Box>
  )
}
