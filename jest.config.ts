module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  modulePathIgnorePatterns: ["./dist/", "./test/mocks.ts"],
  coveragePathIgnorePatterns: ["./test/mocks.ts"],
};
