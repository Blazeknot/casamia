module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['./src'],
  transform: { '\\.ts$': ['ts-jest'], '^.+\\.vue$': '@vue/vue3-jest', '.*\\.(js)$': 'babel-jest' },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,ts,vue}',
    '!**/node_modules/**',
    '!**/src/main.ts',
    '!**/src/stories/**',
    '!**/src/router/**',
    '!**/src/firebase/*',
    '!**/src/store/*'
  ],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: -10
  //   }
  // },
  globals: {
    'ts-jest': {
      tsconfig: {
        // allow js in typescript
        allowJs: true
      }
    }
  }
}
