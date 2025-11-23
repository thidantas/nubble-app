import { User, UserAPI } from '../User'

export interface AuthCredentials {
  token: string
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
    token: string // 'eyJhbGciOiJSUzI1NiJ9.eyJkYX...'
  }
  user: UserAPI
}

export interface SignUpDataAPI {
  firstName: string // 'Jhon'
  lastName: string // 'Doee'
  username: string // 'jhondoe'
  email: string // 'johndoe@example.com'
  password: string // '1234567'
}
