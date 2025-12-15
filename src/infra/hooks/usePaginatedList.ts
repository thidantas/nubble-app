import { useEffect, useState } from 'react'

import { useInfiniteQuery } from '@tanstack/react-query'
import { Page } from '@types'

export interface UsePaginatedListResult<TData> {
  list: TData[]
  isError: boolean | null
  isLoading: boolean
  hasNextPage: boolean
  isFetching: boolean
  refresh: () => void
  fetchNextPage: () => void
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([])

  const {
    data,
    isLoading,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
    refetch
  } = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam = 1 }) => getList(pageParam),
    getNextPageParam: ({ meta }) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined
  })

  useEffect(() => {
    if (data) {
      const newList = data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data]
      }, [])

      setList(newList)
    }
  }, [data])

  return {
    list,
    isError: isError,
    isLoading: isLoading,
    hasNextPage: !!hasNextPage,
    isFetching: isFetching,
    refresh: refetch,
    fetchNextPage: fetchNextPage
  }
}
