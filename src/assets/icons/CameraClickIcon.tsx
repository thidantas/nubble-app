import Svg, { Circle } from 'react-native-svg'

import { IconBase } from '@components'

export function CameraClickIcon({ size = 80, iconColor = 'white' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox={`0 0 80 80`}>
      <Circle cx="40" cy="40" r="34" fill={iconColor} />
      <Circle cx="40" cy="40" r="39" stroke={iconColor} strokeWidth="2" />
    </Svg>
  )
}
