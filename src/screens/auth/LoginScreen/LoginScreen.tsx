import { Alert } from 'react-native'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Text,
  Screen,
  Button,
  FormTextInput,
  FormPasswordInput
} from '@components'
import { AuthScreenProps } from '@routes'

import { LoginSchema, loginSchema } from './loginSchema'

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
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
