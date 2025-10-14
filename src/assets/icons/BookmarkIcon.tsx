import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function BookMarkIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M4.82 1.538c-.708 0-1.282.574-1.282 1.283v15l4.885-3.14a2.82 2.82 0 0 1 3.051 0l4.885 3.14v-15c0-.709-.574-1.283-1.282-1.283zM2 2.821A2.82 2.82 0 0 1 4.82 0h10.257a2.82 2.82 0 0 1 2.82 2.82v16.41a.769.769 0 0 1-1.185.648l-6.07-3.902a1.28 1.28 0 0 0-1.386 0l-6.07 3.902A.769.769 0 0 1 2 19.23z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
