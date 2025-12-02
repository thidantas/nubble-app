import { fireEvent, render, screen } from 'test-utils'

import { IconProps } from '@components'

import { PasswordInput } from '../PasswordInput'

const renderComponent = () => {
  const mockedOnChange = jest.fn()

  render(
    <PasswordInput
      label="Password"
      placeholder="password"
      value="12345678"
      onChangeText={mockedOnChange}
    />
  )
  const inputElement = screen.getByPlaceholderText(/password/)

  return {
    inputElement
  }
}

describe('<PasswordInput />', () => {
  describe('render component', () => {
    test('starts with hidden password', () => {
      const { inputElement } = renderComponent()

      expect(inputElement.props.secureTextEntry).toBeTruthy()

      // screen.debug({ mapProps: props => props })
    })

    describe('when pressing eye icon', () => {
      it('should show the password, and change to the eye off icon', () => {
        const { inputElement } = renderComponent()

        const eyeOnIcon: IconProps['name'] = 'eyeOn'
        fireEvent.press(screen.getByTestId(eyeOnIcon))

        const eyeOffIcon: IconProps['name'] = 'eyeOff'
        const eyeOffIconElement = screen.getByTestId(eyeOffIcon)

        expect(eyeOffIconElement).toBeTruthy()

        expect(inputElement.props.secureTextEntry).toBeFalsy()
      })
    })
  })
})
