/**
 * @description A mock implementation of the MMKV class interface.
 * This class simulates the synchronous storage operations of react-native-mmkv
 * within the Jest/Node.js testing environment, bypassing native module calls.
 */
export class MockMMKV {
  /**
   * @description Internal object to store mock key-value pairs.
   * Note: MMKV stores all values as strings, even numbers and booleans, so we mimic that here.
   * @private
   */
  private data: Record<string, string> = {}

  /**
   * @description Mock implementation of MMKV's getString.
   * @param {string} key The key to retrieve.
   * @returns {string | undefined} The stored string value, or undefined if the key is not found.
   */
  getString = jest.fn(
    (key: string): string | undefined => this.data[key] || undefined
  )

  /**
   * @description Mock implementation of MMKV's setString.
   * @param {string} key The key to store the value under.
   * @param {string} value The string value to store.
   */
  setString = jest.fn((key: string, value: string): void => {
    this.data[key] = value
  })

  /**
   * @description Mock implementation of MMKV's delete.
   * @param {string} key The key to delete.
   */
  delete = jest.fn((key: string): void => {
    delete this.data[key]
  })

  /**
   * @description Mock implementation of MMKV's clearAll.
   * Clears all simulated data from the mock storage.
   */
  clearAll = jest.fn((): void => {
    this.data = {}
  })

  /**
   * @description Mock implementation of MMKV's getBoolean.
   * Always returns false in the mock for simplification.
   * @param {string} key The key to retrieve the boolean from.
   * @returns {boolean | undefined} Always returns false or undefined.
   */
  getBoolean = jest.fn((key: string): boolean | undefined => {
    const value = this.data[key]
    if (value === undefined) return undefined
    // Simple boolean parsing for a slightly more accurate mock
    return value === 'true'
  })

  /**
   * @description Mock implementation of MMKV's getNumber.
   * Always returns 0 in the mock for simplification.
   * @param {string} key The key to retrieve the number from.
   * @returns {number | undefined} Always returns 0 or undefined.
   */
  getNumber = jest.fn((key: string): number | undefined => {
    const value = this.data[key]
    if (value === undefined) return undefined
    return Number(value)
  })

  /**
   * @description Utility method ONLY for testing purposes.
   * Allows tests to inspect the internal state of the mock storage.
   * @returns {Record<string, string>} The internal data storage object.
   */
  __getData = (): Record<string, string> => this.data
}

/**
 * @description A mock function that simulates the factory function createMMKV.
 * Each call returns a new instance of the MockMMKV class.
 * @returns {MockMMKV} A simulated MMKV storage instance.
 */
export const createMMKV = jest.fn((): MockMMKV => new MockMMKV())

// If you are using default import syntax (e.g., import * as MMKV from 'react-native-mmkv')
// you should uncomment this section.
// /**
//  * @description Default export for the entire react-native-mmkv mock module.
//  */
// export default {
//   createMMKV,
//   MMKV: MockMMKV,
// };
