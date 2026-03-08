module.exports = {
  tsRepo: true,
  test: {
    build: false  // don't build test files
  },
  release: {
    access: "public",
    publish: true,
    ghRelease: false,
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      ['@semantic-release/npm', {
        npmPublish: true,
        provenance: false
      }]
    ]
  }
}
