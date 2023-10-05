module.exports = {
  moduleNameMapper: {
    '^@helper': '<rootDir>/helper',
    '^@helper/(.*)': '<rootDir>/helper/$1',
  },
  transformIgnorePatterns: ['node_modules'],
};
