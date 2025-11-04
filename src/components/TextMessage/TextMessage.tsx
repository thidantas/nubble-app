import { useRef } from 'react'
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps
} from 'react-native'

import { useAppTheme } from '@hooks'

import { Box } from '../Box/Box'
import { Text } from '../Text/Text'
import { $textInputStyle } from '../TextInput/TextInput'

interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void
}

export function TextMessage({
  onPressSend,
  value,
  ...rNTextInputProps
}: TextMessageProps) {
  const { colors } = useAppTheme()
  const inputRef = useRef<RNTextInput>(null)

  const sendIsDisabled = value?.trim().length === 0

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, { color: colors.gray1 }]}
          {...rNTextInputProps}
        />
        <Pressable
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value || '')}
        >
          <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  )
}
