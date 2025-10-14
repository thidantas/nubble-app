import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function HomeFillIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M11.877.724a4.26 4.26 0 0 0-4.754 0l-4.914 3.25C.838 4.88 0 6.501 0 8.25v6.746C0 17.76 2.053 20 4.586 20H6v-3.5a3.5 3.5 0 1 1 7 0V20h1.414C16.947 20 19 17.76 19 14.997V8.251c0-1.749-.838-3.371-2.21-4.278z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
