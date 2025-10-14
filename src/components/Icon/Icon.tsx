import { EyeOffIcon } from '../../assets/icons/eyeOffIcon'
import { EyeOnIcon } from '../../assets/icons/eyeOnIcon'

interface IconProps {
  name: IconName
}

export function Icon({ name }: IconProps) {
  const SVGIcon = iconRegistry[name]

  return <SVGIcon />
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon
}

type IconType = typeof iconRegistry
type IconName = keyof IconType
