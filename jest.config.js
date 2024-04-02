module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
  /**
   * Jest's require algorithm adds .json to the list of extensions it can import, and it prioritizes .json over .tsx
   * We want to do it to avoid to import app.json instead App.tsx, for example, what was happening on the file App.test.tsx when ran jest tests.
   */
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],
  extensionsToTreatAsEsm: ['.ts', '.tsx']
}
