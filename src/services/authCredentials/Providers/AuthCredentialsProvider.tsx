import { createContext, useEffect, useState } from 'react'

import { AuthCredentials, authService } from '@domain'

import { authCredentialsStorage } from '../authCredentialsStorage'
import { AuthCredentialsService } from '../authCredentialsTypes'

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  isLoading: true,
  authCredentials: null,
  saveCredentials: async () => {},
  removeCredentials: async () => {}
})

export function AuthCredentialsProvider({
  children
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    startAuthCredentials()
  }, [])

  async function startAuthCredentials() {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000, ''))
      const ac = await authCredentialsStorage.getAuthCredentials()
      if (ac) {
        authService.updateToken(ac.token)
        setAuthCredentials(ac)
      }
    } catch (error) {
      // TODO: handling potential errors when querying credentials in storage.
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token)
    authCredentialsStorage.saveAuthCredentials(ac)
    setAuthCredentials(ac)
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken()
    authCredentialsStorage.removeAuthCredentials()
    setAuthCredentials(null)
  }

  return (
    <AuthCredentialsContext.Provider
      value={{ authCredentials, isLoading, saveCredentials, removeCredentials }}
    >
      {children}
    </AuthCredentialsContext.Provider>
  )
}
