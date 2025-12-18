import { AuthCredentials, userAdapter, UserAPI } from '@domain'

const jhonUserApi: UserAPI = {
  id: 7,
  first_name: 'Jhon',
  last_name: 'Doe',
  username: 'jhondoe',
  email: 'jhondoe@email.com',
  profile_url: 'https://example-image.com/5-jhon.png',
  is_online: false,
  full_name: 'Jhon Doe'
}

export const jhonAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2030-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh-token',
  user: userAdapter.toUser(jhonUserApi)
}

export const mockUtils = {
  jhonUserApi,
  jhonAuthCredentials
}
