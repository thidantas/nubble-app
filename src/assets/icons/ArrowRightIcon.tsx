import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function ArrowRightIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M10.3 3.397a1.28 1.28 0 0 1 1.855 0l5.46 5.644c.513.53.513 1.388 0 1.918l-5.46 5.644c-.512.53-1.343.53-1.855 0a1.39 1.39 0 0 1 0-1.919l3.22-3.327H3.311C2.588 11.357 2 10.749 2 10c0-.75.588-1.357 1.312-1.357H13.52L10.3 5.316a1.39 1.39 0 0 1 0-1.919"
        clipRule="evenodd"
      />
    </Svg>
  )
}
