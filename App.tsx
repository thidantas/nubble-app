// import { ToastProvider } from '@services'
import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from '@components'
import { Router } from '@routes'
import { theme } from '@theme'

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* The `ToastProvider` should only be used for the layer with the implemented context. */}
        {/* <ToastProvider> */}
        <Router />
        <Toast />
        {/* </ToastProvider>  */}
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
