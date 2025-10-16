import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '@shopify/restyle'

import { theme } from './src/theme/theme'
import { SignUpScreen } from './src/screens/auth/SignUpScreen/SignUpScreen'

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <LoginScreen /> */}
        <SignUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
