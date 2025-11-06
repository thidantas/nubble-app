import { Dimensions } from 'react-native'

import { Toast, ToastType } from '@services'

import { Box, BoxProps, Icon, IconProps, Text } from '@components'
import { $shadowProps } from '@theme'

const MAX_WIDTH = Dimensions.get('screen').width * 0.9

interface ToastContentProps {
  toast: Toast
}

export function ToastContent({ toast }: ToastContentProps) {
  const type: ToastType = toast?.type || 'success'

  return (
    <Box {...$boxStyle} style={$shadowProps}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{ flexShrink: 1 }} ml="s16" preset="paragraphMedium" bold>
        {toast?.message}
      </Text>
    </Box>
  )
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound'
  },
  error: {
    color: 'error',
    name: 'errorRound'
  }
}

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  flexDirection: 'row',
  padding: 's16',
  borderRadius: 's16',
  opacity: 0.9,
  maxWidth: MAX_WIDTH
}
