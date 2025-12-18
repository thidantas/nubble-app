import { authCredentialsStorage } from '@services'
import { mockUtils, server, userMocked } from '@test'
import { act, fireEvent, renderScreen, screen } from 'test-utils'

import { AppStack } from '@routes'

jest.unmock('@react-navigation/native')

beforeAll(() => {
  server.listen()
  jest.useFakeTimers()
  jest
    .spyOn(authCredentialsStorage, 'getAuthCredentials')
    .mockResolvedValue(mockUtils.jhonAuthCredentials)
})

afterEach(() => {
  server.resetHandlers()
  jest.clearAllMocks()
})

afterAll(() => {
  server.close()
  jest.useRealTimers()
  jest.restoreAllMocks()
})

function appStackWithInitialRoute() {
  return <AppStack initialRouteName="SearchScreen" />
}

describe('integration: SearchScreen', () => {
  test('Search Flow', async () => {
    // Navigate to Search Screen
    renderScreen(appStackWithInitialRoute())

    // Find the search input and type user name
    const inputText = screen.getByPlaceholderText(/digite sua busca/i)

    expect(inputText).toBeTruthy()

    fireEvent.changeText(inputText, 'mar')

    act(() => jest.runAllTimers())

    // Find two users as per the MSW mock
    const user1 = await screen.findByText(userMocked.user1.username)

    expect(user1).toBeTruthy()

    const user2 = await screen.findByText(userMocked.user2.username)

    expect(user2).toBeTruthy()

    // Select the user1 and navigate to Profile Screen
    fireEvent.press(user1)

    // Expect to be at the Profile Screen with the user1 loaded
    const userFullName = await screen.findByText(userMocked.user1.full_name)

    expect(userFullName).toBeTruthy()

    // Press the back button to navigate back to Search Screen
    const backButton = screen.getByTestId('screen-back-button')
    fireEvent.press(backButton)

    // Clean the search input
    const inputTextSAfterBack = screen.getByPlaceholderText(/digite sua busca/i)
    fireEvent.changeText(inputTextSAfterBack, '')
    act(() => jest.runAllTimers())

    // Make sure the search history (buscas recentes) section appears
    const searchHistoryTitle = await screen.findByText(/buscas recentes/i)
    expect(searchHistoryTitle).toBeTruthy()

    // The user1 (pressed) was the saved in the search history
    const user1AfterBack = screen.queryByText(userMocked.user1.username)

    expect(user1AfterBack).toBeTruthy()

    // The user2 (NOT pressed) must Not appear in the search history

    const user2AfterBack = screen.queryByText(userMocked.user2.username)

    expect(user2AfterBack).toBeFalsy()

    // Remove user1 from the search history by pressing the trash icon
    const trashIcon = screen.getByTestId('trash')
    fireEvent.press(trashIcon)

    // Make sure the user1 is removed from the search history
    const user1AfterRemoved = screen.queryByText(userMocked.user1.username)
    expect(user1AfterRemoved).toBeFalsy()
  })
})
