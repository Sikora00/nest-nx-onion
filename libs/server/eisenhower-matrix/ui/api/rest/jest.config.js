module.exports = {
  name: 'server-eisenhower-matrix-ui-api-rest',
  preset: '../../../../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../../../../coverage/libs/server/eisenhower-matrix/ui/api/rest'
};
