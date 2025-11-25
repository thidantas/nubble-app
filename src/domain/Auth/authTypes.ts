import { User, UserAPI } from '../User'

export interface AuthCredentials {
  token: string
  tokenExpiresAt: string
  refreshToken: string
  user: User
}

export interface SignUpData {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}

export interface ForgotPasswordParam {
  email: string
}

export interface FieldIsAvailableApi {
  message: string
  isAvailable: boolean
}

export interface AuthCredentialsAPI {
  auth: {
    type: string // 'bearer'
    token: string // 'eyJhbGciOiJSUzI1NiJ9.eyJkYX...',
    refreshToken: string // '50f13a17aa71e918424539549be4784ff9...',
    expires_at: string //2025-11-25T18:42:12.916+00:00
  }
  user: UserAPI
}

export interface SignUpDataAPI {
  firstName: string // 'Jhon'
  lastName: string // 'Doe'
  username: string // 'jhondoe'
  email: string // 'johndoe@example.com'
  password: string // '12345678'
}
