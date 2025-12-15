import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { renderHook } from 'test-utils'

import { theme } from '@theme'

import { useAppSafeArea } from '../useAppSafeArea'

const mockedUsedSafeAreaInsets = jest.mocked(useSafeAreaInsets)

describe('useSafeArea', () => {
  describe('when the safe area is less than minimum requirement', () => {
    mockedUsedSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 5,
          bottom: 5
        } as EdgeInsets)
    )

    it('return the minimum requirement', () => {
      const { result } = renderHook(() => useAppSafeArea())

      expect(result.current.top).toBe(theme.spacing.s20)
      expect(result.current.bottom).toBe(theme.spacing.s20)
    })
  })

  describe('when the safe area is greater than minimum requirement', () => {
    it('returns the safe area', () => {
      mockedUsedSafeAreaInsets.mockImplementationOnce(
        () =>
          ({
            top: 30,
            bottom: 30
          } as EdgeInsets)
      )

      const { result } = renderHook(() => useAppSafeArea())

      expect(result.current.top).toEqual(30)
      expect(result.current.bottom).toEqual(30)
    })
  })
})
