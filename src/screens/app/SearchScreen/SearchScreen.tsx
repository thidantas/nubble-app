import { useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { User, useUserSearch } from '@domain'
import { useSearchHistoryService } from '@services'

import { Icon, ProfileUser, Screen, TextInput } from '@components'
import { useDebounce } from '@hooks'

import { SearchHistory } from './components/SearchHistory'

export function SearchScreen({}) {
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search)

  const { list } = useUserSearch(debouncedSearch)

  const { addUser } = useSearchHistoryService()

  function renderItem({ item }: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        onPress={() => {
          addUser(item)
        }}
        user={item}
      />
    )
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite sua busca"
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon name="search" color="gray3" />}
        />
      }
    >
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          keyExtractor={item => item.username}
          renderItem={renderItem}
        />
      )}
    </Screen>
  )
}
