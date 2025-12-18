import { GestureResponderEvent } from 'react-native'

import { User } from '@domain'
import { useNavigation } from '@react-navigation/native'

import {
  PressableBox,
  ProfileAvatar,
  Text,
  PressableBoxProps,
  ProfileAvatarProps,
  Box
} from '@components'

type ProfileUserProps = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageURL'>
  RightComponent?: React.ReactElement
} & PressableBoxProps

export function ProfileUser({
  user,
  avatarProps,
  RightComponent,
  onPress,
  ...pressableBoxProps
}: ProfileUserProps) {
  const navigation = useNavigation()

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event)
    }

    navigation.navigate('ProfileScreen', { userId: user.id })
  }

  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      mb="s16"
      justifyContent="space-between"
      onPress={handleOnPress}
      {...pressableBoxProps}
    >
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        <ProfileAvatar {...avatarProps} imageURL={user.profileUrl} />
        <Text preset="paragraphMedium" ml="s12" semiBold>
          {user.username}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  )
}
