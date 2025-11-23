import { createMMKV } from 'react-native-mmkv'

import { Storage } from '../storage'

const MMKVInstance = createMMKV()

export const MMKVStorage: Storage = {
  getItem: key => {
    const item = MMKVInstance.getString(key)
    return item ? JSON.parse(item) : null
  },
  setItem: async (key, value) => {
    MMKVInstance.set(key, JSON.stringify(value))
  },
  removeItem: async key => {
    MMKVInstance.remove(key)
  }
}
