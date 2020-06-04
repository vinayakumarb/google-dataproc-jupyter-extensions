/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg)$': '@jupyterlab/testutils/lib/jest-file-mock.js',
  },
  setupFiles: ['@jupyterlab/testutils/lib/jest-shim.js'],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  collectCoverageFrom: ['src/**/*{ts,tsx}'],
  testPathIgnorePatterns: ['src/e2e/'],
  transformIgnorePatterns: ['/node_modules/(?!(@jupyterlab/.*)/)'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
