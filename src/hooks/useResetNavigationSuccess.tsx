import { useNavigation } from '@react-navigation/native'

import { AuthStackParamList } from '@routes'

export function useResetNavigationSuccess() {
  const navigation = useNavigation()

  function resetNavigation(params: AuthStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen'
        },
        {
          name: 'SuccessScreen',
          params
        }
      ]
    })
  }

  return { resetNavigation }
}
