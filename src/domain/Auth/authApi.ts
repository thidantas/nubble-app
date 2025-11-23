import { api } from '@api'

import { UserAPI } from '../User'

import {
  AuthCredentialsAPI,
  FieldIsAvailableApi,
  ForgotPasswordParam,
  SignUpData
} from './authTypes'

const AUTH_URL = 'auth'

async function signIn(
  email: string,
  password: string
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>(`${AUTH_URL}/login`, {
    email,
    password
  })

  return response.data
}

async function singOut(): Promise<string> {
  const response = await api.get<string>(`${AUTH_URL}/profile/logout`)

  return response.data
}

async function signUp(data: SignUpData): Promise<UserAPI> {
  const response = await api.post<UserAPI>(`${AUTH_URL}/register`, data)

  return response.data
}

async function isUsernameAvailable(params: {
  username: string
}): Promise<FieldIsAvailableApi> {
  const response = await api.get<FieldIsAvailableApi>(
    `${AUTH_URL}/validate-username`,
    {
      params
    }
  )

  return response.data
}

async function isEmailAvailable(params: {
  email: string
}): Promise<FieldIsAvailableApi> {
  const response = await api.get<FieldIsAvailableApi>(
    `${AUTH_URL}/validate-email`,
    {
      params
    }
  )

  return response.data
}

async function forgotPassword(
  params: ForgotPasswordParam
): Promise<{ message: string }> {
  const response = await api.post<{ message: string }>(
    `${AUTH_URL}/forgot-password`,
    null,
    { params }
  )

  return response.data
}

export const authApi = {
  signIn,
  singOut,
  signUp,
  isUsernameAvailable,
  isEmailAvailable,
  forgotPassword
}
