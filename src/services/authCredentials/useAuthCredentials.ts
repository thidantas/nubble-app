// import { create } from 'zustand'
// import { persist } from 'zustand/middleware'

// import { storage } from '../storage'

import { AuthCredentialsService } from './authCredentialsTypes'
import { useAuthCredentialsContext } from './useAuthCredentialsContext'

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsContext()
}

/* The example below reflects a global authentication system management
    implementation using the zustand library with its persist 
    function to handle data persistence.
*/

// const useAuthCredentialsZustand = create<AuthCredentialsService>()(
//   persist(
//     set => ({
//       isLoading: false,
//       authCredentials: null,
//       saveCredentials: async ac => {
//         set({ authCredentials: ac })
//       },
//       removeCredentials: async () => {
//         set({ authCredentials: null })
//       }
//     }),
//     {
//       name: '@auth',
//       storage: storage
//     }
//   )
// )
