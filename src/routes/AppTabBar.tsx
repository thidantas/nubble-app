import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import {
  Box,
  BoxProps,
  Icon,
  Text,
  TextProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps
} from '@components'
import { useAppSafeArea } from '@hooks'
import { $shadowProps } from '@theme'

import { AppTabBottomTabParamList } from './AppTabNavigator'
import { mapScreenToProps } from './mapScreenToProps'

export function AppTabBar({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea()

  return (
    <Box {...$boxWrapper} style={[{ paddingBottom: bottom }, $shadowProps]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <TouchableOpacityBox
            {...$itemWrapper}
            key={tabItem.label}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <Text
              {...$label}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            >
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        )
      })}
    </Box>
  )
}

const $label: TextProps = {
  semiBold: true,
  mt: 's4',
  preset: 'paragraphCaption'
}

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button'
}

const $boxWrapper: BoxProps = {
  paddingTop: 's12',
  flexDirection: 'row',
  backgroundColor: 'background'
}
