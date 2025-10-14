import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function TrashIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        d="M4.525 19q-.62 0-1.06-.44a1.45 1.45 0 0 1-.44-1.06V3.25H2v-1.5h4.7V1h6.6v.75H18v1.5h-1.025V17.5q0 .6-.45 1.05t-1.05.45zm10.95-15.75H4.525V17.5h10.95zm-8.3 12.1h1.5V5.375h-1.5zm4.15 0h1.5V5.375h-1.5z"
      />
    </Svg>
  )
}
