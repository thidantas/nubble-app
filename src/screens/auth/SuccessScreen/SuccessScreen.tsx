import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Text } from '../../../components/Text/Text'
import { Icon } from '../../../components/Icon/Icon'
import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { RootStackParamList } from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({ route, navigation }: ScreenProps) {
  const routeParams = route.params!

  function goBackToBegin() {
    // TODO: navigate to login screen

    navigation.goBack()
  }

  return (
    <Screen>
      <Icon {...routeParams.icon} />

      <Text preset="headingLarge" mt="s24">
        {routeParams.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {routeParams.description}
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </Screen>
  )
}
