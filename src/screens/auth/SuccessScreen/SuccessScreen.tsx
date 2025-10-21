import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Screen, Button, Icon, Text } from '@components'
import { RootStackParamList } from '@routes'

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
