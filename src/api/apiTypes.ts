export interface MetaDataPageAPI {
  total: number // 24
  per_page: number // 10
  current_page: number // 1
  last_page: number // 3
  first_page: number // 1
  first_page_url: string // '/?page=1'
  last_page_url: string // '/?page=3'
  next_page_url: string | null // '/?page=2'
  previous_page_url: string | null // null
}

/**
 * @description Interface that defines the format of an API data page
 * @template Data - Data type of the page
 */

export interface PageAPI<Data> {
  meta: MetaDataPageAPI
  data: Data[]
}

/**
 *  @description Interface that defines the format of the page parameters
 */

export interface PageParams {
  page?: number
  per_page?: number
}
