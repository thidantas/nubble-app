import { Alert } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { zodResolver } from '@hookform/resolvers/zod'

import { Text } from '../../../components/Text/Text'
import { Screen } from '../../../components/Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { RootStackParamList } from '../../../routes/Routes'
import { LoginSchema, loginSchema } from './loginSchema'
import { FormTextInput } from '../../../components/Form/FormTextInput'
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  function submitForm({ email, password }: LoginSchema) {
    Alert.alert(`Email: ${email} \nSenha: ${password}`)
  }

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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's10' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
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

      <Button
        disabled={!formState.isValid}
        title="Entrar"
        onPress={handleSubmit(submitForm)}
      />

      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Criar uma conta"
        mt="s12"
      />
    </Screen>
  )
}
