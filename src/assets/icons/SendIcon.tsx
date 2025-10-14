import { Svg, Path } from 'react-native-svg'

import { IconBase } from '../../components/Icon/Icon'

export function SendIcon({ size = 20, iconColor = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={iconColor}
        d="M19 1.615a1 1 0 0 0-.008-.112l-.003-.025a1 1 0 0 0-.03-.096l-.011-.027a1 1 0 0 0-.037-.07l-.017-.027a.6.6 0 0 0-.153-.152l-.025-.017a1 1 0 0 0-.073-.038l-.023-.01a1 1 0 0 0-.1-.03l-.019-.003a.6.6 0 0 0-.198 0l-.021.003a1 1 0 0 0-.091.026L1.389 7.342a.6.6 0 0 0-.05 1.102L8.23 11.77l3.326 6.89a.6.6 0 0 0 1.102-.05l6.305-16.8q.017-.045.026-.091l.003-.024a1 1 0 0 0 .008-.08m-2.983 1.52-7.46 7.46-5.433-2.622zm-3.99 13.741-2.622-5.433 7.46-7.46z"
      />
    </Svg>
  )
}
