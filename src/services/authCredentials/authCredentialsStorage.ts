import { AuthCredentials } from '@domain'

import { storage } from '../storage'

const AUTH_KEY = '@Auth'

async function saveAuthCredentials(ac: AuthCredentials): Promise<void> {
  await storage.setItem<AuthCredentials>(AUTH_KEY, ac)
}

async function getAuthCredentials(): Promise<AuthCredentials | null> {
  const authCredentials = await storage.getItem<AuthCredentials>(AUTH_KEY)

  return authCredentials
}

async function removeAuthCredentials(): Promise<void> {
  await storage.removeItem(AUTH_KEY)
}

export const authCredentialsStorage = {
  saveAuthCredentials,
  getAuthCredentials,
  removeAuthCredentials
}
