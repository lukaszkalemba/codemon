module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-config-files/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/src/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/jest-config-files/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/jest-config-files/setup-test-env.js'],
};
