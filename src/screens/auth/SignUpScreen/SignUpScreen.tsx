import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { RootStackParamList } from '../../../routes/Routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'

import { FormTextInput } from '../../../components/Form/FormTextInput'
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput'
import { signUpSchema, SignUpSchema } from './signUpSchema'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

export function SignUpScreen({ navigation }: ScreenProps) {
  const { resetNavigation } = useResetNavigationSuccess()

  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  function submitForm(formValues: SignUpSchema) {
    console.log('formValues', formValues)
    //TODO: implementation of form submission logic

    resetNavigation({
      title: 'Sua conta foi criada com sucesso',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success'
      }
    })
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        autoCapitalize="words"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  )
}
