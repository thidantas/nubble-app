import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function SearchIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M8.692 0a8.692 8.692 0 1 0 5.52 15.406l4.348 4.347a.843.843 0 1 0 1.193-1.193l-4.347-4.347A8.692 8.692 0 0 0 8.692 0M1.687 8.692a7.005 7.005 0 1 1 11.965 4.947A7.005 7.005 0 0 1 1.687 8.692"
        clipRule="evenodd"
      />
    </Svg>
  )
}
