import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function ChevronRightIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 4 7 6-7 6"
      />
    </Svg>
  )
}
