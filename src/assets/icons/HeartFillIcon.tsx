import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function HeartFillIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M10 2.485A5.98 5.98 0 0 1 13.933 1a6 6 0 0 1 4.314 1.847A6.3 6.3 0 0 1 20 7.223a6.3 6.3 0 0 1-1.754 4.376c-.724.751-1.449 1.521-2.178 2.296-1.486 1.578-2.99 3.176-4.55 4.679l-.005.004a2.2 2.2 0 0 1-3.095-.068L1.753 11.6c-2.337-2.424-2.337-6.328 0-8.752A5.957 5.957 0 0 1 10 2.485"
        clipRule="evenodd"
      />
    </Svg>
  )
}
