import { ActivityIndicator, Box, Button, Text } from '@components'

interface HomeEmptyProps {
  loading: boolean
  error: unknown
  refetch: () => void
}

export function HomeEmpty({ loading, error, refetch }: HomeEmptyProps) {
  let component = (
    <Text preset="paragraphMedium" bold>
      Não há publicações no seu feed
    </Text>
  )

  if (loading) {
    component = <ActivityIndicator color="primary" />
  }

  if (error) {
    component = (
      <>
        <Text preset="paragraphMedium" bold mb="s16">
          Não foi possível carregar o feed 😢
        </Text>
        <Button title="recarregar" preset="outline" onPress={refetch} />
      </>
    )
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  )
}
