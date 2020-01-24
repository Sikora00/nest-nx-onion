module.exports = {
  name: 'onion',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/onion',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
