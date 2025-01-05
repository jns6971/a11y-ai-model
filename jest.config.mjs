import * as path from 'path';

/** @type {import('jest').Config} */
export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@tensorflow/))'
  ],
  // Ignore empty test files
  testRunner: './customTestRunner.js',
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  // Remove or comment out testPathIgnorePatterns since we're handling this in the custom runner
  // testPathIgnorePatterns: [],
};