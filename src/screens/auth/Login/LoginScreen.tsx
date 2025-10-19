import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Text } from '../../../components/Text/Text'
import { Screen } from '../../../components/Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { TextInput } from '../../../components/TextInput/TextInput'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'
import { RootStackParamList } from '../../../routes/Routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen')
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen')
  }

  return (
    <Screen scrollable>
      <Text preset="headingLarge" marginBottom="s8">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        errorMessage="mensagem de erro"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's10' }}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's8' }}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold
        mb="s48"
      >
        Esqueci minha senha
      </Text>

      <Button title="Entrar" />

      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Criar uma conta"
        mt="s12"
      />
    </Screen>
  )
}
