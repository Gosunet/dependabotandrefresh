module.exports = {
  branchPrefix: 'test-renovate/',
  dryRun: true,
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  includeForks: true,
  commitMessageAction: "DO-00 ci:",
  prConcurrentLimit: 4,
  packageRules: [
    {
      matchPackageNames: ['com.batch.android:batch-sdk'],
      allowedVersions: '/^[0-9]+\\.[0-9]+\\.[0-9]+(\\.[0-9]+)?$/'
    },
    {
      matchPackageNames: ['com.decathlon.vitamin.compose'],
      ignoreUnstable: false
    }
  ]
};
