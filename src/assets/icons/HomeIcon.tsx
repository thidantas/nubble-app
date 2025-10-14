import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function HomeIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M11.141 2.094a2.94 2.94 0 0 0-3.282 0l-4.872 3.22c-.947.626-1.525 1.745-1.525 2.953v6.686c0 1.907 1.417 3.453 3.166 3.453h1.218v-3.453c0-2.2 1.636-3.985 3.654-3.985s3.654 1.784 3.654 3.985v3.453h1.218c1.749 0 3.166-1.546 3.166-3.453V8.267c0-1.208-.578-2.327-1.525-2.953zm.551 16.312v-3.453c0-1.32-.981-2.39-2.192-2.39-1.21 0-2.192 1.07-2.192 2.39v3.453zM7.102.731a4.3 4.3 0 0 1 4.797 0l4.872 3.22C18.155 4.865 19 6.502 19 8.267v6.686C19 17.74 16.928 20 14.372 20H4.628C2.072 20 0 17.74 0 14.953V8.267C0 6.502.845 4.865 2.23 3.95z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
