module.exports = {
  name: 'petcator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/petcator',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
