import { Post, PostAPI } from './postTypes'

/**
 * @description Transforms a PostAPI object into a Post object
 * @param postAPI
 * @returns Post
 */

function toPost(postAPI: PostAPI): Post {
  return {
    id: postAPI.id,
    text: postAPI.text,
    author: {
      profileURL: postAPI.user.profile_url,
      name: postAPI.user.full_name,
      userName: postAPI.user.username,
      id: postAPI.user.id
    },
    imageURL: postAPI.image_url,
    reactionCount: Number(postAPI.meta.like_count),
    commentCount: Number(postAPI.meta.comments_count),
    favoriteCount: Number(postAPI.meta.favorite_count)
  }
}

export const postAdapter = {
  toPost
}
