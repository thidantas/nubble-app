import { SimpleLogo } from '@brand'

import { Box, BoxProps, Icon } from '@components'
import { useAppSafeArea } from '@hooks'

export function HomeHeader() {
  const { top } = useAppSafeArea()

  return (
    <Box {...$wrapper} style={{ paddingTop: top }}>
      <SimpleLogo width={70} />
      <Box gap="s24" flexDirection="row">
        <Icon name="search" />
        <Icon name="bell" />
        <Icon name="comment" />
      </Box>
    </Box>
  )
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24'
}
