module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/tests/**/*.test.js', '**/tests/**/*.test.ts', '**/tests/**/*.test.tsx'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@rn-primitives|react-native-.*|expo.*|@expo.*|uniwind|lucide-react-native|class-variance-authority|clsx|tailwind-merge)/)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
