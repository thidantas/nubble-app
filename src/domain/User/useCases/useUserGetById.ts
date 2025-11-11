import { QueryKeys } from '@infra'
import { useQuery } from '@tanstack/react-query'

import { userService } from '../userService'

export function useUserGetById(id: number) {
  /* 
  The commented code serves as an example to illustrate the simplification 
  that Tanstack allows when using it for handling data from the endpoint 
  */

  // const [user, setUser] = useState<User>()
  // const [error, setError] = useState<boolean | null>(null)
  // const [loading, setLoading] = useState<boolean>(false)

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30 // 30 seconds,
    // cacheTime: 5000
  })

  // const getUserById = useCallback(async () => {
  //   try {
  //     const _user = await userService.getById(id)
  //     setUser(_user)
  //   } catch (err) {
  //     setError(true)
  //   } finally {
  //     setLoading(false)
  //   }
  // }, [id])

  // useEffect(() => {
  //   getUserById()
  // }, [getUserById])

  return {
    user: data,
    isError,
    isLoading,
    isFetching,
    refetch
  }
}
