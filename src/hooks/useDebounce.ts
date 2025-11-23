import { useEffect, useState } from 'react'

/**
 * @description https://usehooks-ts.com/react-hook/use-debounce-value
 * @param value value to be debounced
 * @param delay delay in milliseconds `default: 500 ms`
 * @returns debounced value
 */

export function useDebounce<T>(value: T, delay = 500): T {
  const [debounceValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debounceValue
}
