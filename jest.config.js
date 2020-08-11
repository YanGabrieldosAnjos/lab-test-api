module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  coveragePathIgnorePatterns: [
    "/node_modules"
  ],
  preset: "ts-jest",
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePaths: ["<rootDir>/src/"],
  testMatch: ["<rootDir>/tests/**/*.test.ts?(x)"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  testEnvironment: 'node'
}