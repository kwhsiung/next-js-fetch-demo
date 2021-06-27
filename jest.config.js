module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.js',
    '<rootDir>/pages/**/*.js',
  ],
}
