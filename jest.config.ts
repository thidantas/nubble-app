import type { Config } from 'jest'

const config: Config = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|@react-navigation/.*|native-base|react-native-svg|msw|until-async)'
  ],
  moduleDirectories: ['node_modules', './src/test'],
  moduleNameMapper: {
    '^react-native-mmkv$':
      '<rootDir>/__mocks__/react-native-mmkv/react-native-mmkv.ts'
  },
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
  collectCoverageFrom: [
    'src/{utils,components,hooks,domain,screens}/**/*.{ts,tsx}'
  ],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/types/', 'index']
}

export default config
