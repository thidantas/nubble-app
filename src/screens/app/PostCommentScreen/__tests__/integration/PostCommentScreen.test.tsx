import { Alert, AlertButton } from 'react-native'

import { authCredentialsStorage } from '@services'
import { mockedPostComment, server, resetInMemoryResponse } from '@test'
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from 'test-utils'

import { PostCommentScreen } from '../../PostCommentScreen'

beforeAll(() => {
  server.listen()
  jest.useFakeTimers()
})

afterEach(() => {
  server.resetHandlers()
  resetInMemoryResponse()
})

afterAll(() => {
  server.close()
  jest.resetAllMocks()
  jest.useRealTimers()
})

describe('integration: PostCommentScreen', () => {
  test('when ADDING a comment the list is automatically updated', async () => {
    jest
      .spyOn(authCredentialsStorage, 'getAuthCredentials')
      .mockResolvedValue(mockedPostComment.jhonAuthCredentials)

    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          key: 'PostCommentScreen',
          name: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1
          }
        }}
      />
    )

    const comment = await screen.findByText(
      /Solitudo statua curo tego crepusculum adeptio absorbeo quam coaegresco inventore./i
    )
    expect(comment).toBeTruthy()

    // Find the input field
    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i)

    // Type the message
    fireEvent.changeText(inputText, 'Novo comentário')

    // Click on send
    fireEvent.press(screen.getByText(/Enviar/i))

    // Wait for the updated list with the new comment
    const newComment = await screen.findByText(/Novo comentário/i)

    expect(newComment).toBeTruthy()

    const comments = await screen.findAllByTestId('post-comment-id')

    expect(comments).toHaveLength(3)
  })

  test('when DELETING a comment, the list is automatically updated and a toast message is displayed', async () => {
    let mockedConfirm: AlertButton['onPress']
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((_title, _message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress
        }
      })
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1
          }
        }}
      />
    )

    // Wait for the list to load
    // Identify the comment to be deleted
    const comment = await screen.findByText(
      mockedPostComment.jhonPostCommentAPI.message,
      { exact: false }
    )

    expect(comment).toBeTruthy()

    // Long press the comment
    fireEvent(comment, 'longPress')

    expect(mockedAlert).toHaveBeenCalled()

    // Press "confirm" on the alert
    mockedConfirm && mockedConfirm()

    // Verify if the list has been updated (the user's comment should be gone)
    await waitForElementToBeRemoved(() =>
      screen.queryByText(mockedPostComment.jhonPostCommentAPI.message, {
        exact: false
      })
    )

    const comments = await screen.findAllByTestId('post-comment-id')

    expect(comments.length).toBe(1)

    // Verify if the toast message was displayed
    await waitFor(() => {
      expect(screen.getByTestId('toast-message')).toBeTruthy()
    })

    act(() => jest.runAllTimers())

    expect(screen.queryByTestId('toast-message')).toBeNull()
  })
})
