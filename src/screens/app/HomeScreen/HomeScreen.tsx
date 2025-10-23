import { Button, Screen, Text } from '@components'
import { AppTabScreenProps } from '@routes'

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
        mb="s14"
      />

      <Button
        title="Favorite"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  )
}
