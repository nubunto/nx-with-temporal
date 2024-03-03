/* eslint-disable */
export default {
  displayName: 'temporal-worker',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['js', 'ts', 'html'],
  coverageDirectory: '../coverage/temporal-worker',
};
