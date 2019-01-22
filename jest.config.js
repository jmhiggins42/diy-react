module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: './spec/tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testEnvironment: 'node',
  testMatch: ['**/.test/**/*.+(ts|tsx|js)'],
  testPathIgnorePatterns: ['\\.d.ts$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
