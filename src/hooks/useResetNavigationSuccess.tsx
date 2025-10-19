import { useNavigation } from '@react-navigation/native'

import { RootStackParamList } from '../routes/Routes'

export function useResetNavigationSuccess() {
  const navigation = useNavigation()

  function resetNavigation(params: RootStackParamList['SuccessScreen']) {
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
