import { Svg, Path, Circle } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'
import { palette } from '../../theme/theme'

export function CheckRoundIcon({
  size = 48,
  iconColor = palette.greenSuccess
}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox={`0 0 ${size} ${size}`}>
      <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={iconColor} />
      <Path
        fill={palette.grayWhite}
        fillRule="evenodd"
        d="M33.649 17.352a1.2 1.2 0 0 1 0 1.697l-11.2 11.2a1.2 1.2 0 0 1-1.698 0l-6.4-6.4a1.2 1.2 0 1 1 1.697-1.698l5.552 5.552 10.352-10.351a1.2 1.2 0 0 1 1.696 0"
        clipRule="evenodd"
      />
    </Svg>
  )
}
