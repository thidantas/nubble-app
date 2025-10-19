import { Svg, Path, Circle } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'
import { palette } from '../../theme/theme'

export function MessageRoundIcon({
  size = 48,
  iconColor = palette.greenPrimary
}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox={`0 0 ${size} ${size}`}>
      <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={iconColor} />
      <Path
        fill={palette.grayWhite}
        fillRule="evenodd"
        d="m32 20.502-6.827 4.235a1 1 0 0 1-.134.073l-.046.03c-.507.314-1.36.3-1.894-.031L16 20.405V28c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-7.922 2.626-7.105-4.407a1.6 1.6 0 0 0-.356-.162c.36-.346.848-.559 1.383-.559h12c.555 0 1.06.23 1.423.598q-.12.049-.227.115zM30 16H18c-2.213 0-4 1.788-4 4v8c0 2.212 1.787 4 4 4h12c2.212 0 4-1.788 4-4v-8c0-2.212-1.788-4-4-4"
        clipRule="evenodd"
      />
    </Svg>
  )
}
