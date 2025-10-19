import { Svg, Path, Circle } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'
import { palette } from '../../theme/theme'

export function ErrorRoundIcon({
  size = 48,
  iconColor = palette.redError
}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox={`0 0 ${size} ${size}`}>
      <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={iconColor} />
      <Path
        stroke={palette.grayWhite}
        strokeLinecap="round"
        strokeWidth="3"
        d="m15 15 16.228 17m-15.455 0L32 15"
      />
    </Svg>
  )
}
