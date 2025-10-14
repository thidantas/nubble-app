import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function CheckIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M18.684 4.316a1.08 1.08 0 0 1 0 1.528l-10.08 10.08a1.08 1.08 0 0 1-1.528 0l-5.76-5.76a1.08 1.08 0 1 1 1.528-1.528l4.996 4.997 9.316-9.317a1.08 1.08 0 0 1 1.528 0"
        clipRule="evenodd"
      />
    </Svg>
  )
}
