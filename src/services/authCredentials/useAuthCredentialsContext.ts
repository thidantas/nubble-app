import { useContext } from 'react'

import { AuthCredentialsContext } from './Providers/AuthCredentialsProvider'

export function useAuthCredentialsContext() {
  const context = useContext(AuthCredentialsContext)

  if (!context) {
    throw new Error(
      'AuthCredentials must be used within a AuthCredentialsProvider'
    )
  }

  return context
}
