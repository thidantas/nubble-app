import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function ArrowLeftIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M9.7 16.603c-.512.53-1.343.53-1.856 0l-5.46-5.644a1.39 1.39 0 0 1 0-1.918l5.46-5.644a1.28 1.28 0 0 1 1.857 0c.512.53.512 1.389 0 1.919L6.48 8.643h10.207C17.412 8.644 18 9.252 18 10c0 .75-.588 1.357-1.312 1.357H6.48l3.22 3.327a1.39 1.39 0 0 1 0 1.919"
        clipRule="evenodd"
      />
    </Svg>
  )
}
