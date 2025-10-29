import { apiAdapter } from '@api'
import { Page } from '@types'

import { postAdapter } from './postAdapter'
import { postApi } from './postApi'
import { Post } from './postTypes'

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({ page, per_page: 5 })

  // throw new Error('Not implemented')
  // return []
  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta)
  }
}

export const postService = {
  getList
}
