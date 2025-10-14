import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function NewPostIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M1.41 10a8.59 8.59 0 1 1 17.18 0 8.59 8.59 0 0 1-17.18 0m9.295-3.718a.705.705 0 0 0-1.41 0v3.013H6.282a.705.705 0 0 0 0 1.41h3.013v3.013a.705.705 0 0 0 1.41 0v-3.013h3.013a.705.705 0 0 0 0-1.41h-3.013z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
