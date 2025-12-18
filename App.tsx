// import { ToastProvider } from '@services'
import { AuthCredentialsProvider } from '@services'
import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from '@components'
import { Router } from '@routes'
import { theme } from '@theme'

import { initializeStorage, MMKVStorage } from './src/services/storage'

initializeStorage(MMKVStorage)

const queryClient = new QueryClient()

function App() {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            {/* The `ToastProvider` should only be used for the layer with the implemented context. 
        Zustand implementation doesn't need a provider */}
            {/* <ToastProvider> */}
            <Router />
            <Toast />
            {/* </ToastProvider>  */}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  )
}

export default App
