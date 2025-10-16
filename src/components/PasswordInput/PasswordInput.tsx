import { useState } from 'react'

import { Icon } from '../Icon/Icon'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

type PasswordInputProps = Omit<
  TextInputProps,
  'secureTextEntry' | 'RightComponent'
>

export function PasswordInput(passwordInputProps: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev)
  }

  return (
    <TextInput
      {...passwordInputProps}
      secureTextEntry={isSecureTextEntry}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color="gray2"
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  )
}
