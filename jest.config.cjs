module.exports = {
  // other Jest configurations...
  preset: 'ts-jest',
  transform: {},
  testEnvironment: 'node',
  transformIgnorePatterns: [],
  globals: {
    'ts-jest': {
      useESM: true,
    }
  }
};

  