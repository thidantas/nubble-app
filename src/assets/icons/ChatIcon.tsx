import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function ChatIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        fillRule="evenodd"
        d="M10 0C4.477 0 0 4.477 0 10a9.96 9.96 0 0 0 1.195 4.744l-.72 3.872a.78.78 0 0 0 .91.91l3.87-.721A9.96 9.96 0 0 0 10 20c5.523 0 10-4.477 10-10S15.523 0 10 0M1.56 10a8.44 8.44 0 1 1 4.22 7.31.78.78 0 0 0-.533-.09l-3.03.563.564-3.03a.78.78 0 0 0-.092-.534A8.4 8.4 0 0 1 1.561 10m3.972-1.844c0-.43.35-.78.78-.78h7.376a.78.78 0 0 1 0 1.56H6.312a.78.78 0 0 1-.78-.78m0 3.688c0-.431.35-.78.78-.78H10a.78.78 0 0 1 0 1.56H6.312a.78.78 0 0 1-.78-.78"
        clipRule="evenodd"
      />
    </Svg>
  )
}
