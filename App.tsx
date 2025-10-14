import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemeProvider } from '@shopify/restyle'

import { Text } from './src/components/Text/Text'
import { Button } from './src/components/Button/Button'
import { theme } from './src/theme/theme'
import { Icon } from './src/components/Icon/Icon'
import { TextInput } from './src/components/TextInput/TextInput'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge" marginBottom="s8">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            errorMessage="mensagem de erro"
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{ mb: 's10' }}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
            boxProps={{ mb: 's20' }}
          />

          <Text color="primary" preset="paragraphSmall" bold mt="s10">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" marginTop="s48" />
          <Button preset="outline" title="Criar uma conta" mt="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App
