import { PageAPI } from '@api'
import { UserAPI } from '@domain'

const user1: UserAPI = {
  id: 4,
  first_name: 'Marcelo',
  last_name: 'Silva',
  username: 'marcelosilva',
  email: 'celotavares@email.com',
  profile_url: 'https://example-image.com/marcelo.png',
  is_online: true,
  full_name: 'Marcelo Silva'
}

const user2: UserAPI = {
  id: 5,
  first_name: 'Maria',
  last_name: 'Daniela',
  username: 'mariadaniela',
  email: 'mariadan@email.com',
  profile_url: 'https://example-image.com/maria-daniela.png',
  is_online: false,
  full_name: 'Maria Daniela'
}

const userList: UserAPI[] = [user1, user2]

const mockedUserResponse: PageAPI<UserAPI> = {
  meta: {
    total: 2,
    per_page: 5,
    current_page: 1,
    last_page: 1,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=1',
    next_page_url: null,
    previous_page_url: null
  },
  data: userList
}

export const userMocked = {
  mockedUserResponse,
  userList,
  user1,
  user2
}
