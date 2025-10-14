import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function MoreIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M12 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </Svg>
  )
}
