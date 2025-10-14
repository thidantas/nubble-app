import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function BookmarkFillIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M2 2.82A2.82 2.82 0 0 1 4.82 0h10.257a2.82 2.82 0 0 1 2.82 2.82v16.41a.769.769 0 0 1-1.185.648l-6.07-3.902a1.28 1.28 0 0 0-1.386 0l-6.07 3.902A.769.769 0 0 1 2 19.23z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
