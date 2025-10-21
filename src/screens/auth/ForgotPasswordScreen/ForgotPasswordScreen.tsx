import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Text } from '../../../components/Text/Text'
import { Screen } from '../../../components/Screen/Screen'
import { Button } from '../../../components/Button/Button'
import { RootStackParamList } from '../../../routes/Routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import {
  forgotPasswordSchema,
  ForgotPasswordSchema
} from './forgotPasswordSchema'
import { FormTextInput } from '../../../components/Form/FormTextInput'

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { resetNavigation } = useResetNavigationSuccess()

  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    },
    mode: 'onChange'
  })

  function submitForm(values: ForgotPasswordSchema) {
    console.log('value:', values)
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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's40' }}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  )
}
