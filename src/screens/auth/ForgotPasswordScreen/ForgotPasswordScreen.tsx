import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Text } from '../../../components/Text/Text'
import { Screen } from '../../../components/Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { TextInput } from '../../../components/TextInput/TextInput'
import { RootStackParamList } from '../../../routes/Routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { resetNavigation } = useResetNavigationSuccess()

  function submitForm() {
    // TODO: submit form

    resetNavigation({
      title: 'Enviamos as \ninstruções para seu \ne-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary'
      }
    })
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's40' }}
      />

      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  )
}
