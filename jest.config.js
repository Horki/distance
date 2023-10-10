module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@helper': '<rootDir>/src/helper',
    '^@helper/(.*)': '<rootDir>/src/helper/$1',
    '^@models': '<rootDir>/src/models',
    '^@models/(.*)': '<rootDir>/src/models/$1',
  },
  transformIgnorePatterns: ['node_modules'],
};
