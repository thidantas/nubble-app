import { AuthCredentials } from '@domain'

export interface AuthCredentialsService {
  isLoading: boolean
  authCredentials: AuthCredentials | null
  saveCredentials: (authCredentials: AuthCredentials) => Promise<void>
  removeCredentials: () => Promise<void>
}
