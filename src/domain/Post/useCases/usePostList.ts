import { useEffect, useState } from 'react'

import { postService } from '../postService'
import { Post } from '../postTypes'

export function usePostList() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean | null>(false)
  const [postList, setPostList] = useState<Post[]>([])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  async function fetchInitialData() {
    try {
      setError(null)
      setLoading(true)
      const { data, meta } = await postService.getList(1)
      setPostList(data)
      if (meta.hasNextPage) {
        setPage(2)
        setHasNextPage(true)
      } else {
        setHasNextPage(false)
      }
    } catch (err) {
      console.log('ERROR', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) return

    try {
      setLoading(true)
      const { data, meta } = await postService.getList(page)
      setPostList(prev => [...prev, ...data])
      if (meta.hasNextPage) {
        setPage(prev => prev + 1)
        setHasNextPage(true)
      } else {
        setHasNextPage(false)
      }
    } catch (err) {
      console.log('ERROR', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInitialData()
  }, [])

  return {
    loading,
    error,
    postList,
    refresh: fetchInitialData,
    fetchNextPage
  }
}
